import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { useEffect, useState } from 'react';

import { MainContainer } from './components/MainContainer';

export const App = () => {
  TimeAgo.setDefaultLocale(en.locale);
  TimeAgo.addLocale(en);
  const [loading, setLoading] = useState(true);
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
      updateThoughts(data);
      // need to handle 404
      setLoading(false);
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
    <MainContainer
      loading={loading}
      thoughts={thoughts}
      updateThoughts={updateThoughts}
      hearted={hearted}
      setHearted={setHearted}
    />
  );
};
