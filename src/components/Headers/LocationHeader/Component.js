import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import style from './Style.module.css';
import backArrow from '../../../assets/chevron.left.png';
import Vector from '../../../assets/vector.png';

const LocationHeader = () => {
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
    <header className={style.locationHeader}>
      <div className={style.backArrowContainer} onClick={() => navigate('/dashboard')}>
        <img src={backArrow} alt="Back" className="back-arrow"/>
      </div>
      <div className={style.locationHeaderInfo}>
        <img src={Vector} alt="vector" className={style.vector}/>
        <span className={style.nameId}>IP-Car_123456</span>
        <span className={style.statusIndicator}></span>
        <span className={style.currentTime}>{formattedTime}</span>
      </div>
    </header>
  );
};

export default LocationHeader;
