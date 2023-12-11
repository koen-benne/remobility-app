import React, { useEffect, useState } from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router';

const Startup = (props) => {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
      if (timer > 1) {
        navigate('/about', {replace: true});
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className={style.screen}>
      <img className={timer > 0 ? style.disappear : null} src={process.env.PUBLIC_URL + '/logo.svg'} alt="Remobility" />
    </div>
  );
}

export default Startup;
