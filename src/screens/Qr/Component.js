import React, { useEffect, useState } from 'react';
import style from './Style.module.css';
import BackButton from '../../components/BackButton/Component';
import { useNavigate } from 'react-router';
import { useRecoilState, atom } from 'recoil';

const successState = atom({
  key: 'successState',
  default: false,
});

const Qr = (props) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useRecoilState(successState);

  function onSuccess() {
    setSuccess(true);
    navigate('/steps');
  }

  return (
    <div className={style.screen}>
      <BackButton onClick={() => navigate('/steps')}/>
      <h1 className={style.title}>Scan de QR code op de IP-Car</h1>
      <div className={style.qrBox} onClick={onSuccess}>
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
