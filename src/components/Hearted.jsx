import { PropTypes } from 'prop-types';

export const Hearted = ({ count }) => {
  return (
    <div className="hearted-count">
      <span className="hearted-count-emoji">💖</span> {count}{' '}
      {count === 1 ? 'thought' : 'thoughts'} hearted
    </div>
  );
};

Hearted.propTypes = {
  count: PropTypes.number.isRequired,
};
