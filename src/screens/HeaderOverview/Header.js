import React from 'react';
import './Header.css';
import gearIcon from '../../assets/gear.png'; // Import the PNG icon
import logoutIcon from '../../assets/logout.png'; // Your log out icon


function Header() {
  return (
    <header className="header">
      <button className="side-button">
      <img src={logoutIcon} alt="Log out" className="iconlogout" />
        Log uit
      </button>
      <div className="header-content">
        <h1>IP-Car_123456</h1>
        <div className="online-indicator"></div>
      </div>
      <button className="side-button">
        <img src={gearIcon} alt="Settings" className="icongear" /> {/* Use the PNG icon */}
      </button>
    </header>
  );
}

export default Header;
