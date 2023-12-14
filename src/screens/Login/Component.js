import React from 'react';
import style from './Style.module.css';

const Login = (props) => {
  return (
    <div className={style.screen}>
      <div className={style.left}>
        <img className={style.logo} src={process.env.PUBLIC_URL + '/logo-colored.svg'} alt="Remobility" />
      </div>
      <div className={style.right} style={{backgroundImage: "url('" + process.env.PUBLIC_URL + "/login-image.png')"}}>
      </div>
    </div>
  );
}

export default Login;
