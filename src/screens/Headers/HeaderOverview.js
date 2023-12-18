import React from 'react';
import './HeaderOverview.css';
import gearIcon from '../../assets/gear.png'; 
import logoutIcon from '../../assets/logout.png'; 


const HeaderOverview = () => {
  return (
    <header className="overview-header">
        <button className="side-button">
        <img src={gearIcon} alt="Settings" className="icongear" />
      </button>
      <div className="overview-header-content">
        <h1>IP-Car_123456</h1>
        <div className="online-indicator"></div>
      </div>
      <button className="side-button">
      <img src={logoutIcon} alt="Log out" className="iconlogout" />
        Log uit
      </button>
    </header>
  );
}

export default HeaderOverview;
