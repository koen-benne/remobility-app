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
      <h2>IP-Car_{props.tag}</h2>
      <div className={style.editButtons}>
        <img src={deleteIcon} className={style.editButton}></img>
        <img src={editIcon} className={style.editButton}></img>
      </div>
    </div>
  );
};

export default CarButton;
