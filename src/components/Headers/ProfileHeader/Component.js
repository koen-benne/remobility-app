import React from 'react';
import { useNavigate } from 'react-router';
import style from './Style.module.css';
import backArrow from '../../../assets/chevron.left-white.png';
import logoutIcon from '../../../assets/logout.png';


const ProfileHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={style.profileHeader}>
      <div className={style.sideButton} onClick={() => navigate('/dashboard')}>
        <img src={backArrow} alt="Back" className="back-arrow"/>
      </div>
      <div className={style.profileHeaderContent}>
        <h1>Profiel</h1>
      </div>
      <div className={style.sideButton} onClick={() => navigate('/login')}>
      <img src={logoutIcon} alt="Log out" className={style.iconLogout}t/>
        Log uit
      </div>
    </header>
  );
}

export default ProfileHeader;
