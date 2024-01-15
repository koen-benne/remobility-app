import React from 'react';
import style from './Style.module.css';
import gearIcon from '../../../assets/person.png';
import logoutIcon from '../../../assets/logout.png';


const OverviewHeader = () => {
  return (
    <header className={style.overviewHeader}>
        <button className={style.sideButton}>
        <img src={gearIcon} alt="Settings" className={style.person} />
      </button>
      <div className={style.overviewHeaderContent}>
        <h1>IP-Car_123456</h1>
        <div className={style.onlineIndicator}></div>
      </div>
      <button className={style.sideButton}>
      </button>
    </header>
  );
}

export default OverviewHeader;
