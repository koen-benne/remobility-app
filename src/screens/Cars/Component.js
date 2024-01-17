import React from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import backArrow from '../../assets/chevron.left-white.png';
import CarButton from '../../components/CarButton/Component';


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
      <div className={style.rowMaker}>
        <CarButton tag="123456"/>
        <CarButton tag="133578"/>
        <CarButton tag="834692"/>
        <CarButton tag="847348"/>
        <CarButton tag="712613"/>
      </div>
    </div>
  );
}

export default Cars;
