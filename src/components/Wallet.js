import React, {useState} from 'react';
import './Wallet.css';

let defaultWords = [
  'Lets',
  'Gooooo',
  'Top',
  'Kek',
  'Navid',
  'Is',
  'The',
  'Best',
  'Lets',
  'Gooooo',
];

const Wallet = ({key}) => {
  const [words, setWords] = useState(defaultWords);

  return (
    <div key={key} className="wallet-wrapper">
      <div>{words[Math.floor(Math.random() * 10)]}</div>
      <div>{words[Math.floor(Math.random() * 10)]}</div>
    </div>
  );
};

export default Wallet;
