import { PropTypes } from 'prop-types';

export const HeartedHeader = ({ count }) => {
  return (
    <div className="heartedCount">
      <span className="heartedCountEmoji">💖</span> {count}{' '}
      {count === 1 ? 'thought' : 'thoughts'} hearted
    </div>
  );
};

HeartedHeader.propTypes = {
  count: PropTypes.number.isRequired,
};
