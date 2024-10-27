import React from 'react';
import './BasePage.css';
import { Navigate, Route, Routes } from 'react-router-dom'; // Incorrect usage of Navigate
import cheficon from '../Assets/chef.png';
import waitericon from '../Assets/waiter.png';

const BasePage = () => {
  return (
    <div className="wrapper">
      <h1>Osaka Bites</h1>
      <div className="Button-box">
        <button className='chef-button' onClick={() => Navigate('/Chef')}> {/* Incorrect call */}
          <img src={cheficon} alt="Chef icon" className="icon" /> Chef
        </button>
      </div>
      <div className="Button-box">
        <button className='waiter-button' onClick={() => Navigate('/Waiter')}> {/* Incorrect call */}
          <img src={waitericon} alt="Waiter icon" className="icon" /> Waiter
        </button>
      </div>
    </div>
  );
};

export default BasePage;
