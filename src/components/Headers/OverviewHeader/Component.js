import React from 'react';
import { useNavigate } from 'react-router';
import style from './Style.module.css';
import personIcon from '../../../assets/person.png';


const OverviewHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={style.overviewHeader}>
      <div className={style.sideButton} onClick={() => navigate('/profile')}>
        <img src={personIcon} alt="Profile" className={style.person} />
      </div>
      <div className={style.overviewHeaderContent}>
        <h1>IP-Car_123456</h1>
        <div className={style.onlineIndicator}></div>
      </div>
      <div className={style.sideButton}></div>
    </header>
  );
}

export default OverviewHeader;
