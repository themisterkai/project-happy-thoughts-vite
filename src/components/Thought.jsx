import { PropTypes } from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import { useState } from 'react';

import { Heart } from './Heart';

export const Thought = ({
  _id,
  message,
  hearts,
  createdAt,
  handleFetchData,
  hearted,
  setHearted,
  className,
}) => {
  const [heartCount, setHeartCount] = useState(hearts);
  return (
    <div className={`thought ${className}`}>
      <div className="thought-message">{message}</div>
      <div className="thought-heart-time-wrapper">
        <div className="thought-hearts">
          <Heart
            _id={_id}
            hearts={heartCount}
            handleFetchData={handleFetchData}
            hearted={hearted}
            setHearted={setHearted}
            setHeartCount={setHeartCount}
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
  className: PropTypes.string,
};
