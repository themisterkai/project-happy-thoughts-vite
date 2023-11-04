import { PropTypes } from 'prop-types';

export const ErrorMessage = ({ error }) => {
  return <div className="error">{error}</div>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};
