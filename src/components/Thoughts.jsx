import { PropTypes } from 'prop-types';

import { Thought } from './Thought';

export const Thoughts = ({
  thoughts,
  handleFetchData,
  hearted,
  setHearted,
}) => {
  return (
    <>
      {thoughts.map(thought => (
        <div key={thought._id} className="thoughtWrapper">
          <Thought
            className={thought.className != null ? thought.className : ''}
            {...thought}
            handleFetchData={handleFetchData}
            hearted={hearted}
            setHearted={setHearted}
          />
        </div>
      ))}
    </>
  );
};

Thoughts.propTypes = {
  thoughts: PropTypes.array.isRequired,
  handleFetchData: PropTypes.func.isRequired,
  hearted: PropTypes.array.isRequired,
  setHearted: PropTypes.func.isRequired,
};
