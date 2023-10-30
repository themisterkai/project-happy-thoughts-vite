// import { PropTypes } from 'prop-types';

import { useEffect, useState } from 'react';

import { Thought } from './Thought';

export const Thoughts = () => {
  const [thoughts, updateThoughts] = useState([]);
  const [error, setError] = useState();

  const handleFetchData = async () => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`
      );
      const data = await response.json();
      console.log(data);
      updateThoughts(data);
      // need to handle 404
    } catch (e) {
      // need to handle this better
      setError(e.toString());
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      {thoughts.map(thought => (
        <div key={thought._id} className="thought-wrapper">
          <Thought {...thought} />
        </div>
      ))}
    </>
  );
};

Thoughts.propTypes = {
  // message: PropTypes.string.isRequired,
  // hearts: PropTypes.number.isRequired,
  // createdAt: PropTypes.string.isRequired,
};
