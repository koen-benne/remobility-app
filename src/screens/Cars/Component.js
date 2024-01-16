import React from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import backgroundImage from  '../../assets/carsbg.png';
import backArrow from '../../assets/chevron.left-white.png';
import logoutIcon from '../../assets/logout.png';


function Cars() {
const navigate = useNavigate();

  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '82vh',
    width: '75vw',
  };

  return (
    <>
<div className={style.carsbgc}>
  <header className={style.carsHeader}>
      <div className={style.sideButton} onClick={() => navigate('/profile')}>
        <img src={backArrow} alt="Back" className="back-arrow"/>
      </div>
      <div className={style.carsHeaderContent}>
        <h1>Auto's</h1>
      </div>
      <div className={style.sideButton}></div>
    </header>
      <div className={style.carsPage} style={pageStyle}></div>
    </div>
    </>
  );
}

export default Cars;
