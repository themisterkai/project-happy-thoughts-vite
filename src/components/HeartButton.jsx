import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import crypto from 'crypto';

export const HeartButton = ({
  _id,
  hearts,
  handleFetchData,
  hearted,
  setHearted,
  setHeartCount,
}) => {
  useEffect(() => {
    localStorage.setItem('hearted', JSON.stringify(hearted));
  }, [hearted]);

  const heartThought = async id => {
    try {
      // This is for the optimistic update for the hearted state of posts.
      setHeartCount(hearts + 1);
      if (hearted.indexOf(id) === -1) {
        setHearted([...hearted, id]);
      }

      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`,
        {
          method: 'POST',
          headers: new Headers({ 'content-type': 'application/json' }),
        }
      );
      const data = await response.json();
      if (response.status >= 400 && response.status < 600) {
        throw new Error(
          JSON.stringify({
            code: response.status,
            message: data.message,
            errorDetail: data.errors.message.message,
          })
        );
      }
      handleFetchData();
      if (hearted.indexOf(id) === -1) {
        setHearted([...hearted, id]);
      }
    } catch (e) {
      // we can log the error in case it will be useful for users when reporting bugs to us
      console.error(e);
    }
  };
  const disabled = hearted.indexOf(_id) !== -1;
  return (
    <div>
      {disabled ? (
        <div className="thoughtHeartsLiked">
          <button>💖</button> x {hearts}
        </div>
      ) : (
        <div className="thoughtHearts">
          <button onClick={() => heartThought(_id)}>❤️</button> x {hearts}
        </div>
      )}
    </div>
  );
};

HeartButton.propTypes = {
  _id: PropTypes.string.isRequired,
  hearts: PropTypes.number.isRequired,
  handleFetchData: PropTypes.func.isRequired,
  hearted: PropTypes.array.isRequired,
  setHearted: PropTypes.func.isRequired,
  setHeartCount: PropTypes.func.isRequired,
};
