import React, {useState} from 'react';
import './MainScreen.css';

import Wallet from './Wallet';

const MainScreen = () => {
  const [wallets, setWallets] = useState([<Wallet />]);

  const handleAddWallet = () => {
    setWallets([...wallets, <Wallet />]);
  };

  const handleRemoveWallet = () => {
    let walletsCopy = wallets;
    walletsCopy.pop();
    setWallets([...walletsCopy]);
  };

  const handleRemoveSelectedWallet = (id) => {
    let filteredWallets = wallets.filter((wallet, idx) => idx !== id);
    setWallets(filteredWallets);
  };

  return (
    <div className="main-screen-wrapper">
      <h1>Your wallets:</h1>
      {wallets.map((item, idx) => (
        <Wallet key={idx} removeSingle={handleRemoveSelectedWallet} />
      ))}
      <button onClick={handleAddWallet} className="add-button">
        +
      </button>
      <button onClick={handleRemoveWallet} className="add-button">
        -
      </button>
    </div>
  );
};

export default MainScreen;
