import { PropTypes } from 'prop-types';
import { useState } from 'react';

import { Error } from './Error';
import { errorTooLong, errorTooShort } from '../constants';

export const PostThought = ({ handleFetchData, thoughts, updateThoughts }) => {
  const [thought, setThought] = useState('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const postThought = async message => {
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
      await response.json();
      setThought('');
      handleFetchData();

      // need to handle 404
    } catch (e) {
      // need to handle this better
      // setError(e.toString());
      // console.log(error);
    }
  };

  const checkIfTooLong = message => {
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
            checkIfTooLong(e.target.value);
          }}
        />
      </div>
      <div className="postThoughtContainer">
        <div className="postThoughtContainerError">
          <Error error={error} />
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
