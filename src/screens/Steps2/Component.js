import React, { useEffect, useState } from 'react';
import style from './Style.module.css';
import { useNavigate, useLocation } from 'react-router';
import FormInput from '../../components/FormInput/Component';
import carConnected from '../../assets/car-connected.png';

const Steps2 = (props) => {
  const steps = [
    {
    },
    {
      successIcon: carConnected,
      successTitle: "Car Gekoppeld",
      successSubtitle: "De auto staat aan en is gekoppeld aan uw profiel.",
      successOptions: [
        {
          placeholder: "Afronden",
          value: "Afronden",
          style: {
            height: "80px",
            fontSize: "1.5rem",
          },
          onClick: () => navigate('/dashboard'),
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const [step, setStep] = useState(2);
  const [success, setSuccess] = useState(true);
  const options = (steps[step - 1] || {})[success ? "successOptions" : "options"];

  return (
    <div className={style.screen}>
      <div className={style.step}>
        <img className={style.icon} src={steps[step - 1][success ? "successIcon" : "icon"]} alt={steps[step - 1].title} />
        <div className={style.textContainer}>
          <h1 className={style.title}>{steps[step - 1][success ? "successTitle" : "title"]}</h1>
          <p className={style.text}>{steps[step - 1][success ? "successSubtitle" : "subtitle"]}</p>
          {options &&
            <div className={style.options}>
              {options.map((option) => (
                <div className={style.option}>
                  <FormInput type="button" {...option} />
                </div>
              ))}
            </div>
          }
        </div>
      </div>

      <div className={step > 0 ? style.progressBar : null}>
        {steps.map((s, i) => (
          <div className={style.barSection} style={{color: "black"}}>
            <div className={`${style.filler} ${step + success >= i + 2 && style.show}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps2;
