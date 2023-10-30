import { PropTypes } from 'prop-types';

// import { useEffect } from 'react';

import { Thought } from './Thought';

export const Thoughts = ({ thoughts, handleFetchData }) => {
  // const [error, setError] = useState();

  return (
    <>
      {thoughts.map(thought => (
        <div key={thought._id} className="thought-wrapper">
          <Thought {...thought} handleFetchData={handleFetchData} />
        </div>
      ))}
    </>
  );
};

Thoughts.propTypes = {
  thoughts: PropTypes.array.isRequired,
  handleFetchData: PropTypes.func.isRequired,
};
