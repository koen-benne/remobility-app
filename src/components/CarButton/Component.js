import React, { useState } from 'react';
import style from './Style.module.css';
import { useRecoilState, atom } from 'recoil';
import deleteIcon from '../../assets/deletecoloricon.png';
import editIcon from '../../assets/editcoloricon.png';

const currentCar = atom({
  key: 'currentCar',
  default: '123456'
});

const CarButton = (props) => {
  const [car, setCar] = useRecoilState(currentCar);

  return (
    <div className={`${style.button} ${props.tag == car && style.active}`} onClick={() => setCar(props.tag)}>
      <div className={style.rowMaker}>
      <h1 className={style.title}>IP-Car_{props.tag}</h1>
      <div className={style.indicator}></div>
      </div>
      <div className={style.editButtons}>
        <div className={style.buttonComponent}>
        <img src={deleteIcon} className={style.editButton}></img>
        <p>Verwijderen</p>
        </div>
        <div className={style.buttonComponent}>
        <img src={editIcon} className={style.editButton}></img>
        <p>Aanpassen</p>
        </div>
      </div>
    </div>
    
  );
};

export default CarButton;
