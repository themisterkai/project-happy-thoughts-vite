import { useEffect, useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import { Thought } from './Thought/Thought';

export const App = () => {
  TimeAgo.setDefaultLocale(en.locale);
  TimeAgo.addLocale(en);
  const [thoughts, updateThoughts] = useState([]);
  const handleFetchData = async () => {
    const response = await fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`
    );
    const data = await response.json();
    console.log(data);
    updateThoughts(data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="main">
      {thoughts.map(thought => (
        <div key={thought._id} className="thought-wrapper">
          <Thought {...thought} />
        </div>
      ))}
    </div>
  );
};
