import { PropTypes } from 'prop-types';
import { useState } from 'react';

import { Error } from './Error';
import { errorTooLong, errorTooShort } from '../constants';

export const PostThought = ({ handleFetchData }) => {
  const [thought, setThought] = useState('');
  const [error, setError] = useState('');
  const postThought = async message => {
    if (message.length < 5) {
      setError(errorTooShort);
      return;
    }

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
      console.log(data);
      console.log();
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
    } else {
      setError('');
    }
  };

  return (
    <div className="post-thought">
      <div className="post-thought-title">
        <h2>What is making you happy right now?</h2>
      </div>
      <div className="text-area">
        <textarea
          rows={3}
          value={thought}
          onChange={e => {
            setThought(e.target.value);
            checkIfTooLong(e.target.value);
          }}
        />
      </div>
      <div className="post-thought-container">
        <div className="post-thought-container-error">
          <Error error={error} />
        </div>
        <div
          className={
            thought.length < 140
              ? 'post-thought-count'
              : 'post-thought-count-red'
          }
        >
          {thought.length}/140
        </div>
      </div>
      <div className="post-thought-button">
        <button onClick={() => postThought(thought)}>
          ❤️ Send Happy Thought ❤️
        </button>
      </div>
    </div>
  );
};

PostThought.propTypes = {
  // updateThoughts: PropTypes.func.isRequired,
  handleFetchData: PropTypes.func.isRequired,
};
