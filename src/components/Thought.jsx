import { PropTypes } from 'prop-types';
import ReactTimeAgo from 'react-time-ago';

import { Heart } from './Heart';

export const Thought = ({
  _id,
  message,
  hearts,
  createdAt,
  handleFetchData,
  hearted,
  setHearted,
}) => {
  return (
    <div className="thought">
      <div className="thought-message">{message}</div>
      <div className="thought-heart-time-wrapper">
        <div className="thought-hearts">
          <Heart
            _id={_id}
            hearts={hearts}
            handleFetchData={handleFetchData}
            hearted={hearted}
            setHearted={setHearted}
          />
        </div>
        <div className="thought-time">
          <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
        </div>
      </div>
    </div>
  );
};

Thought.propTypes = {
  _id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  hearts: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleFetchData: PropTypes.func.isRequired,
  hearted: PropTypes.array.isRequired,
  setHearted: PropTypes.func.isRequired,
};
