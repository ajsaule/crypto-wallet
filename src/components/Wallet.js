import React, {useState} from 'react';
import './Wallet.css';

const Wallet = ({key, removeSingle}) => {
  return (
    <div key={key} className="wallet-wrapper">
      <div>
        Currency: ETH <br /> Balance: $10,0000
      </div>
      <div>
        Swap: <button>⇵</button>
      </div>
      <button onClick={(key) => removeSingle(key)}>X</button>
    </div>
  );
};

export default Wallet;
