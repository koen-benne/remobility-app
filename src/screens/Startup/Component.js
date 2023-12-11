import React from 'react';
import style from './Style.module.css';

const Startup = () => {
  return (
    <div className={style.screen}>
      <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Remobility" />
    </div>
  );
}

export default Startup;
