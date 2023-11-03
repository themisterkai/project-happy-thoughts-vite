import { PropTypes } from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import { useState } from 'react';

import { HeartButton } from './HeartButton';

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
      <div className="thoughtMessage">{message}</div>
      <div className="thoughtHeartTimeWrapper">
        <div className="thoughtHearts">
          <HeartButton
            _id={_id}
            hearts={heartCount}
            handleFetchData={handleFetchData}
            hearted={hearted}
            setHearted={setHearted}
            setHeartCount={setHeartCount}
          />
        </div>
        <div className="thoughtTime">
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
