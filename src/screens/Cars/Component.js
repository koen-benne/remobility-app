import React from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import backArrow from '../../assets/chevron.left-white.png';
import addPlus from '../../assets/addicon.png';
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
        <CarButton tag="456789"/>
        <CarButton tag="834692"/>
      </div>
      <div className={style.rowMaker}>
        <CarButton tag="537921"/>
        <CarButton tag="712614"/>
        <div className={style.button}>
        <img src={addPlus} alt="ADD"/>
        </div>
      </div>
    </div>
  );
}

export default Cars;
