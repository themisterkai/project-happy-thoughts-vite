import { PropTypes } from 'prop-types';

export const Error = ({ error }) => {
  return <div className="error">{error}</div>;
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
