import { PropTypes } from 'prop-types';

import { Thoughts } from './Thoughts';
import { PostThought } from './PostThought';
import { HeartedHeader } from './HeartedHeader';
import { Header } from './Header';
import { LoadingPage } from './LoadingPage';

export const MainContainer = ({
  loading,
  thoughts,
  updateThoughts,
  handleFetchData,
  hearted,
  setHearted,
}) => (
  <div className="main">
    {loading ? (
      <LoadingPage />
    ) : (
      <>
        <Header />
        <HeartedHeader count={hearted.length} />
        <PostThought
          handleFetchData={handleFetchData}
          thoughts={thoughts}
          updateThoughts={updateThoughts}
        />
        <Thoughts
          thoughts={thoughts}
          handleFetchData={handleFetchData}
          hearted={hearted}
          setHearted={setHearted}
        />
      </>
    )}
  </div>
);

MainContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  thoughts: PropTypes.array.isRequired,
  updateThoughts: PropTypes.func.isRequired,
  hearts: PropTypes.number.isRequired,
  handleFetchData: PropTypes.func.isRequired,
  hearted: PropTypes.array.isRequired,
  setHearted: PropTypes.func.isRequired,
};
