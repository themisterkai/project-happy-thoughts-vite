import { PropTypes } from 'prop-types';
import { useState } from 'react';

import { ErrorMessage } from './ErrorMessage';
import { errorTooLong, errorTooShort } from '../constants';

export const PostThought = ({ handleFetchData, thoughts, updateThoughts }) => {
  const [thought, setThought] = useState('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const postThought = async message => {
    // we are catching potential errors here before sending a request to the API.
    // messages that are less than 5 messages will be set an error state and will
    // not go through.
    if (message.length < 5) {
      setError(errorTooShort);
      return;
    }

    // This is for the optimistic update for thoughts.
    // We add the thought immediately. This will be replaced when we get the result
    // from the API.
    const optimisticThought = {
      _id: 'optimisic_thought',
      className: 'optimisticThought',
      message,
      hearts: 0,
      createdAt: Date.now(),
      __v: 0,
    };
    updateThoughts([optimisticThought, ...thoughts]);

    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`,
        {
          method: 'POST',
          body: JSON.stringify({ message }),
          headers: new Headers({ 'content-type': 'application/json' }),
        }
      );
      const data = await response.json();
      if (response.status >= 400 && response.status < 600) {
        throw new Error(
          JSON.stringify({
            code: response.status,
            message: data.message,
            errorDetail: data.errors.message.message,
          })
        );
      }
      await response.json();
      setThought('');
      handleFetchData();
    } catch (e) {
      // we can log the error in case it will be useful for users when reporting bugs to us
      console.error(e);
    }
  };

  const checkIfMessageTooLong = message => {
    if (message.length > 140) {
      setError(errorTooLong);
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
  };

  return (
    <div className="postThought">
      <div className="postThoughtTitle">
        <h2>What is making you happy right now?</h2>
      </div>
      <div className="textArea">
        <textarea
          rows={3}
          value={thought}
          onChange={e => {
            setThought(e.target.value);
            checkIfMessageTooLong(e.target.value);
          }}
        />
      </div>
      <div className="postThoughtContainer">
        <div className="postThoughtContainerError">
          <ErrorMessage error={error} />
        </div>
        <div
          className={
            thought.length <= 140 ? 'postThoughtCount' : 'postThoughtCountRed'
          }
        >
          {thought.length}/140
        </div>
      </div>
      <div className="postThoughtButton">
        <button onClick={() => postThought(thought)} disabled={disabled}>
          ❤️ Send Happy Thought ❤️
        </button>
      </div>
    </div>
  );
};

PostThought.propTypes = {
  handleFetchData: PropTypes.func.isRequired,
  thoughts: PropTypes.array.isRequired,
  updateThoughts: PropTypes.func.isRequired,
};
