import React from 'react';
import './TopDonator.css';

const TopDonator = ({ onClick, name, img, amount }) => {
  return (
    <div className="top-donator">
      <div className="top-donator-info">
        <img className="donpic" src={img} alt={name} />
        <span className="donator-name">{name}</span>
      </div>
      <div className="top-donator-amount">
        ${amount}
        <span className="top-donator-text"> - Top Donator</span>
      </div>
      <button className='showpop info-donate-button' onClick={onClick}>View Donation List</button>
    </div>
  );
};

export default TopDonator;