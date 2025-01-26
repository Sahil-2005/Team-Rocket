import React, { useState } from 'react';
import './DonationListPopup.css';

const DonationListPopup = ({ isOpen, handleClose }) => {
  const donationData = [
    { name: "Chirag Sharma", img: "https://images.pexels.com/photos/8173269/pexels-photo-8173269.jpeg?auto=compress&cs=tinysrgb&w=600", amount: 1500 },
    { name: "John Doe", img: "https://images.pexels.com/photos/3305456/pexels-photo-3305456.jpeg?auto=compress&cs=tinysrgb&w=600", amount: 1000 },
    { name: "Jane Smith", img: "https://images.pexels.com/photos/3816097/pexels-photo-3816097.jpeg?auto=compress&cs=tinysrgb&w=600", amount: 2000 },
    { name: "Michael Lee", img: "https://images.pexels.com/photos/8173280/pexels-photo-8173280.jpeg?auto=compress&cs=tinysrgb&w=600", amount: 2500 },
    { name: "Sarah Wong", img: "https://images.pexels.com/photos/3747465/pexels-photo-3747465.jpeg?auto=compress&cs=tinysrgb&w=600", amount: 1800 },
  ];

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-btn" onClick={handleClose}>X</button>
          <p className='list-title'>Donation List</p>
          <div className="donation-list">
            {donationData.map((donor, index) => (
              <div key={index} className="donation-item">
                <img src={donor.img} alt={donor.name} className="donor-img" />
                <div className="donor-details">
                  <p className="donor-name">{donor.name}</p>
                  <p className="donor-amount">${donor.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DonationListPopup;