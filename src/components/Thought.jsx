import { PropTypes } from 'prop-types';
import ReactTimeAgo from 'react-time-ago';

export const Thought = ({
  _id,
  message,
  hearts,
  createdAt,
  handleFetchData,
}) => {
  const heartThought = async () => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`,
        {
          method: 'POST',
          headers: new Headers({ 'content-type': 'application/json' }),
        }
      );
      const data = await response.json();
      console.log(data);
      console.log();
      // setThought('');
      handleFetchData();

      // need to handle 404
    } catch (e) {
      // need to handle this better
      // setError(e.toString());
      // console.log(error);
    }
  };
  return (
    <div className="thought">
      <div className="thought-message">{message}</div>
      <div className="thought-hearts">
        <button onClick={() => heartThought()}>❤️</button> x {hearts}
      </div>
      <div className="thought-time">
        <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
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
};
