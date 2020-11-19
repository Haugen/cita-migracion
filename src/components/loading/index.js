import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const Loading = ({ results }) => {
  const [state, setState] = useState(['Loading...']);

  const loadingList = [
    "I know, it's taking a long time.",
    "It's not my fault, I promise.",
    'I blame the backends of migracioncolombia.gov.co.',
    'Any time now...',
    "Shouldn't you be working anyways?",
    'OK, this is getting ridiculous.',
    "And I'm running out of loading messages.",
    'And should probably go to bed.',
    'But I do want to watch that new series on Netflix.',
    'The Queens Gambit. So good!',
    "I'm wrapping up here now.",
    "If you still don't have a results, I'm sorry!",
    'I did the best I could!',
    "Perhaps we're sending too many requests.",
    'Should get some results in just a bit.',
    'Juuuuust a bit...',
    'Good luck!',
    'I hope you get your cedula soon!',
  ];

  useEffect(() => {
    setInterval(() => {
      setState((oldState) => {
        return [...oldState, <p>{loadingList[oldState.length - 1]}</p>];
      });
    }, 15000);
  }, []);

  return <p>{state}</p>;
};

export default Loading;
