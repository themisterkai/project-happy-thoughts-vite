import { useEffect, useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import { Thoughts } from './components/Thoughts';
import { PostThought } from './components/PostThought';
import { Hearted } from './components/Hearted';

export const App = () => {
  TimeAgo.setDefaultLocale(en.locale);
  TimeAgo.addLocale(en);
  const [thoughts, updateThoughts] = useState([]);
  const [hearted, setHearted] = useState(() => {
    return JSON.parse(localStorage.getItem('hearted')) || [];
  });

  const handleFetchData = async () => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`
      );
      const data = await response.json();
      console.log(data);
      updateThoughts(data);
      // need to handle 404
    } catch (e) {
      // need to handle this better
      // setError(e.toString());
      // console.log(error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="main">
      <Hearted count={hearted.length} />
      <PostThought handleFetchData={handleFetchData} />
      <Thoughts
        thoughts={thoughts}
        // updateThoughts={updateThoughts}
        handleFetchData={handleFetchData}
        hearted={hearted}
        setHearted={setHearted}
      />
    </div>
  );
};
