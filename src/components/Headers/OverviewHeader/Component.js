import React from 'react';
import style from './Style.module.css';
import gearIcon from '../../../assets/gear.png';
import logoutIcon from '../../../assets/logout.png';


const OverviewHeader = () => {
  return (
    <header className={style.overviewHeader}>
        <button className={style.sideButton}>
        <img src={gearIcon} alt="Settings" className={style.gearIcon} />
      </button>
      <div className={style.overviewHeaderContent}>
        <h1>IP-Car_123456</h1>
        <div className={style.onlineIndicator}></div>
      </div>
      <button className={style.sideButton}>
      <img src={logoutIcon} alt="Log out" className={style.iconLogout}t/>
        Log uit
      </button>
    </header>
  );
}

export default OverviewHeader;
