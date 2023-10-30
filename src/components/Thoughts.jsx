import { PropTypes } from 'prop-types';

// import { useEffect } from 'react';

import { Thought } from './Thought';

export const Thoughts = ({ thoughts }) => {
  // const [error, setError] = useState();

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
  thoughts: PropTypes.array.isRequired,
  // handleFetchData: PropTypes.func.isRequired,
};
