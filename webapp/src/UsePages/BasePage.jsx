// BasePage.js
import React from 'react';
import './BasePage.css';
import { useNavigate } from 'react-router-dom';
import cheficon from '../Assets/chef.png';
import waitericon from '../Assets/waiter.png';

const BasePage = () => {
  const navigate = useNavigate();

  return (
    <div className="base-page-container">
      <h1 className="title">Zen&Zest</h1>
      <div className="icon-container">
        <img
          src={cheficon}
          alt="Chef icon"
          className="icon"
          onClick={() => navigate('/Chef')}
        />
        <img
          src={waitericon}
          alt="Waiter icon"
          className="icon"
          onClick={() => navigate('/Waiter')}
        />
      </div>
    </div>
  );
};

export default BasePage;
