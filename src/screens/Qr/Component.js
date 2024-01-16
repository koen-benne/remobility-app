import React, { useEffect, useState } from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router';

const Qr = (props) => {
  const navigate = useNavigate();

  return (
    <div className={style.screen}>
      <h1 className={style.title}>Scan de QR code op de IP-Car</h1>
      <div className={style.qrBox} onClick={() => navigate('/steps2')}>
        <div className={style.corner1} />
        <div className={style.corner2} />
        <div className={style.corner3} />
        <div className={style.corner4} />
      </div>
      <p className={style.text}>Aan de onderkant van de IP-Car is een QR-code te vinden. Scan deze door hem in het kader te houden om de IP-Car te koppelen.</p>
    </div>
  );
}

export default Qr;
