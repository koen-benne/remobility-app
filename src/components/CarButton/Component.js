import React, { useState } from 'react';
import style from './Style.module.css';
import { useRecoilState, atom } from 'recoil';

const currentCar = atom({
  key: 'currentCar',
  default: '123456'
});

const CarButton = (props) => {
  const [car, setCar] = useRecoilState(currentCar);

  return (
    <div className={`${style.button} ${props.tag == car && style.active}`}>
      <h2>IP-Car_{props.tag}</h2>
    </div>
  );
};

export default CarButton;
