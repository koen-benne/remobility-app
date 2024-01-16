import React from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import backgroundImage from  '../../assets/carsbg.png';
import backArrow from '../../assets/chevron.left-white.png';


function Cars() {
const navigate = useNavigate();

  return (
    <div className={style.screen}>
      <header className={style.carsHeader}>
        <div className={style.sideButton} onClick={() => navigate('/profile')}>
          <img src={backArrow} alt="Back" className="back-arrow"/>
        </div>
          <h1>Auto's</h1>
        <div className={style.sideButton}></div>
      </header>
      <img className={style.carsPage} src={backgroundImage} />
    </div>
  );
}

export default Cars;
