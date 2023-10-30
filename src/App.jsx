// import { useEffect, useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import { Thoughts } from './components/Thoughts';
import { PostThought } from './components/PostThought';

export const App = () => {
  TimeAgo.setDefaultLocale(en.locale);
  TimeAgo.addLocale(en);
  // const [thoughts, updateThoughts] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const handleFetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       updateThoughts(data);
  //       // need to handle 404
  //     } catch (e) {
  //       // need to handle this better
  //       setError(e.toString());
  //       console.log(error);
  //     }
  //   };
  //   handleFetchData();
  // });

  return (
    <div className="main">
      <PostThought />
      <Thoughts />
    </div>
  );
};
