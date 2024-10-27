import React from 'react';
import './BasePage.css';
import { useNavigate } from 'react-router-dom';
import cheficon from '../Assets/chef.png';
import waitericon from '../Assets/waiter.png';

const BasePage = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <h1>Osaka Bites</h1>
      <div className="Button-box">
        <button className="chef-button" onClick={() => navigate('/Chef')}>
          <img src={cheficon} alt="Chef icon" className="icon" /> Chef
        </button>
      </div>
      <div className="Button-box">
        <button className="waiter-button" onClick={() => navigate('/Waiter')}>
          <img src={waitericon} alt="Waiter icon" className="icon" /> Waiter
        </button>
      </div>
    </div>
  );
};

export default BasePage;
