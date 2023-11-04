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
      if (response.status >= 400 && response.status < 600) {
        throw new Error(
          JSON.stringify({
            code: response.status,
            message: data.message,
            errorDetail: data.errors.message.message,
          })
        );
      }
      updateThoughts(data);
      setLoading(false);
    } catch (e) {
      // we can log the error in case it will be useful for users when reporting bugs to us
      console.error(e);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <MainContainer
      loading={loading}
      thoughts={thoughts}
      handleFetchData={handleFetchData}
      updateThoughts={updateThoughts}
      hearted={hearted}
      setHearted={setHearted}
    />
  );
};
