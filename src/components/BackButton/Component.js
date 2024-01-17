import React from 'react';
import style from './Style.module.css';
import backArrow from '../../assets/chevron.left-white.png';

const BackButton = (props) => {
  return (
    <div className={style.backButton} onClick={props.onClick}>
      <img src={backArrow} alt="Back" className="back-arrow"/>
    </div>
  );
};

export default BackButton;
