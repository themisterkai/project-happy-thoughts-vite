import { PropTypes } from 'prop-types';
import ReactTimeAgo from 'react-time-ago';

export const Thought = ({ message, hearts, createdAt }) => {
  return (
    <div className="thought">
      <div className="thought-message">{message}</div>
      <div className="thought-hearts">{hearts}</div>
      <div className="thought-time">
        <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
      </div>
    </div>
  );
};

Thought.propTypes = {
  message: PropTypes.string.isRequired,
  hearts: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};
