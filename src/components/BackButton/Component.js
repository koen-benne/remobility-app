import React, { useState } from 'react';
import style from './Style.module.css';
import backArrow from '../../assets/chevron.left-white.png';

const BackButton = () => {

  return (
    <div className={style.backButton}>
      <img src={backArrow} alt="Back" className="back-arrow"/>
    </div>
  );
};

export default BackButton;
