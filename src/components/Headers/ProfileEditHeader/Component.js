import React from 'react';
import { useNavigate } from 'react-router';
import style from './Style.module.css';
import logoutIcon from '../../../assets/logout.png';


const ProfileEditHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={style.profileHeader}>
      <div className={style.sideButton}></div>
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

export default ProfileEditHeader;
