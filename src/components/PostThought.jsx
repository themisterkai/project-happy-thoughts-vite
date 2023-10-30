// import { PropTypes } from 'prop-types';

import { useState } from 'react';

export const PostThought = () => {
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
        What is making you happy right now?
      </div>
      <div>
        <textarea
          rows={3}
          onChange={e => {
            setThought(e.target.value);
            console.log(thought);
          }}
        />
      </div>
      <div className="post-thought-buttom">
        <button onClick={() => postThought(thought)}>Send Happy Thought</button>
      </div>
    </div>
  );
};

PostThought.propTypes = {
  // message: PropTypes.string.isRequired,
  // hearts: PropTypes.number.isRequired,
  // createdAt: PropTypes.string.isRequired,
};
