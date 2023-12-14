import React from 'react';
import style from './Style.module.css';
import Options from '../../components/Options/Component';

const Login = (props) => {
  const options = [
    {
      option: "Login",
      fields: [
        {
          label: "Email",
          type: "email",
          placeholder: "Email",
          value: props.email,
          // onChange: props.onChangeEmail,
        },
        {
          label: "Wachtwoord",
          type: "password",
          placeholder: "Wachtwoord",
          value: props.password,
          // onChange: props.onChangePassword,
        },
        {
          label: "Onthoud mij",
          type: "checkbox",
          value: props.rememberMe,
          // onChange: props.onChangeRememberMe,
        },
        {
          type: "submit",
          value: "Inloggen",
          // onClick: props.onClickLogin,
          // disabled: props.disabledLogin,
        }
      ]
    },
    {
      option: "Maak account aan",
      fields: [
        {
          label: "Email",
          type: "email",
          placeholder: "Email",
          // value: props.email,
          // onChange: props.onChangeEmail,
        },
        {
          label: "Wachtwoord",
          type: "password",
          placeholder: "Wachtwoord",
          // value: props.password,
          // onChange: props.onChangePassword,
        },
        {
          label: "Bevestig wachtwoord",
          type: "password",
          placeholder: "Bevestig wachtwoord",
          // value: props.password,
          // onChange: props.onChangePassword,
        },
        {
          type: "submit",
          value: "Registreren",
          // onClick: props.onClickLogin,
          // disabled: props.disabledLogin,
        }
      ]
    }
  ];

  return (
    <div className={style.screen}>
      <div className={style.left}>
        <div className={style.loginContainer}>
          <img className={style.logo} src={process.env.PUBLIC_URL + '/logo-colored.svg'} alt="Remobility" />
          <Options options={options}/>
        </div>
      </div>
      <div className={style.right} style={{backgroundImage: "url('" + process.env.PUBLIC_URL + "/login-image.png')"}}>
      </div>
    </div>
  );
}

export default Login;
