import { PropTypes } from 'prop-types';
import { useState } from 'react';

export const PostThought = ({ handleFetchData }) => {
  const [thought, setThought] = useState('');
  const postThought = async message => {
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
            console.log(thought);
          }}
        />
      </div>
      <div
        className={
          thought.length < 140 ? 'post-thought-count' : 'post-thought-count-red'
        }
      >
        {thought.length}/140
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
