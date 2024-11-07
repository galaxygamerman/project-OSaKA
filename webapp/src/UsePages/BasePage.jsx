import React from 'react';
import './BasePage.css';
import { useNavigate } from 'react-router-dom';
import cheficon from '../Assets/chef.png';
import waitericon from '../Assets/waiter.png';
import titleImage from '../Assets/Zen&Zest.png';

const BasePage = () => {
  const navigate = useNavigate();

  return (
    <div className="base-page-container">
      <div className="title-container">
        <img
          src={titleImage}
          alt="Zen & Zest"
          className="title-image"
        />
      </div>
      <div className="icons-container">
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