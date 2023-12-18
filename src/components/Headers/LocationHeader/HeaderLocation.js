import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './HeaderLocation.css'; 
import backArrow from '../../assets/chevron.left.png'; 
import Vector from '../../assets/vector.png';

const HeaderLocation = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date()); // State to store the current time

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date()); // Update time every 5 seconds
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(timerId);
  }, []);

  // Format time for display
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="location-header">
      <div className="back-arrow-container" onClick={() => navigate('/dashboard')}>
        <img src={backArrow} alt="Back" className="back-arrow"/>
      </div>
      <div className="location-header-info">
        <img src={Vector} alt="vector" className="vector"/>
        <span className="name-id">IP-Car_123456</span>
        <span className="status-indicator"></span>
        <span className="current-time">{formattedTime}</span>
      </div>
    </header>
  );
};

export default HeaderLocation;
