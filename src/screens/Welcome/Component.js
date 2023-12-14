import React, { useEffect, useState } from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router';

const Welcome = (props) => {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 0.1);
      if (timer > 0.6) {
        // navigate('/login', {replace: true});
      }
    }, 100);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className={style.screen}>
      <img className={style.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="Remobility" />
      <div className={style.textContainer}>
        <h1 className={style.title}>Welkom</h1>
        <p className={style.text}>Om te beginnen gaan we eerst een aantal stappen doorlopen</p>
      </div>
    </div>
  );
}

export default Welcome;
