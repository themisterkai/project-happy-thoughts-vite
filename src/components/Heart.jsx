import { PropTypes } from 'prop-types';
import { useEffect } from 'react';

export const Heart = ({
  _id,
  hearts,
  handleFetchData,
  hearted,
  setHearted,
}) => {
  useEffect(() => {
    localStorage.setItem('hearted', JSON.stringify(hearted));
  }, [hearted]);

  const heartThought = async id => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`,
        {
          method: 'POST',
          headers: new Headers({ 'content-type': 'application/json' }),
        }
      );
      const data = await response.json();
      console.log(data);
      console.log();
      handleFetchData();
      if (hearted.indexOf(id) === -1) {
        setHearted([...hearted, id]);
      }

      // need to handle 404
    } catch (e) {
      // need to handle this better
      // setError(e.toString());
      // console.log(error);
    }
  };
  const disabled = hearted.indexOf(_id) !== -1;
  return (
    <div className="thought-hearts">
      <button onClick={() => heartThought(_id)} disabled={disabled}>
        ❤️
      </button>{' '}
      x {hearts}
    </div>
  );
};

Heart.propTypes = {
  _id: PropTypes.string.isRequired,
  hearts: PropTypes.number.isRequired,
  handleFetchData: PropTypes.func.isRequired,
  hearted: PropTypes.array.isRequired,
  setHearted: PropTypes.func.isRequired,
};
