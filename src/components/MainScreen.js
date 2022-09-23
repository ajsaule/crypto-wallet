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

  return (
    <div className="main-screen-wrapper">
      {wallets.map((item) => item)}
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
