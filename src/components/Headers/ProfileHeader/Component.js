import React from 'react';
import { useNavigate } from 'react-router';
import style from './Style.module.css';
import backArrow from '../../../assets/chevron.left-white.png';
import logoutIcon from '../../../assets/logout.png';
import { atom, useRecoilState } from 'recoil';

const stepState = atom({
  key: 'stepsState',
  default: 0,
});
const successState = atom({
  key: 'successState',
  default: false
});

const ProfileHeader = () => {
  const [step, setStep] = useRecoilState(stepState);
  const [success, setSuccess] = useRecoilState(successState);

  const navigate = useNavigate();

  function logout() {
    setStep(0);
    setSuccess(false);
    navigate('/login');
  }

  return (
    <header className={style.profileHeader}>
      <div className={style.sideButton} onClick={() => navigate('/dashboard')}>
        <img src={backArrow} alt="Back" className="back-arrow"/>
      </div>
      <div className={style.profileHeaderContent}>
        <h1>Profiel</h1>
      </div>
      <div className={style.sideButton} onClick={logout}>
        <img src={logoutIcon} alt="Log out" className={style.iconLogout}/>
          Log uit
      </div>
    </header>
  );
}

export default ProfileHeader;
