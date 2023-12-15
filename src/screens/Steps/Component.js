import React, { useEffect, useState } from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router';

const Steps = (props) => {
  const steps = [
    {
      icon: "",
      title: "Controller Aansluiten",
      subtitle: "test",
      successIcon: "test",
      successTitle: "Controller Gevonden",
      successSubtitle: "test"
    },
    {
      icon: "test",
      title: "Car Koppelen",
      subtitle: "test",
      successIcon: "test",
      successTitle: "Car Gekoppeld",
      successSubtitle: "test"
    },
  ];

  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (step === 2) {
        navigate('/login');
        return;
      }
      setSuccess(false);
      setTimeout(() => {
        setSuccess(true);
      }, 2000);
      setStep(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className={style.screen}>
      {step === 0 ?
        <div className={style.welcome}>
          <img className={style.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="Remobility" />
          <div className={style.textContainer}>
            <h1 className={style.title}>Welkom</h1>
            <p className={style.text}>Om te beginnen gaan we eerst een aantal stappen doorlopen</p>
          </div>
        </div>
      :
        <div className={style.step}>
          {/* <img className={style.icon} src={process.env.PUBLIC_URL + '/icons/' + steps[step - 1][success ? "successIcon" : "icon"] + '.svg'} alt={steps[step - 1].title} /> */}
          <div className={style.textContainer}>
            <h1 className={style.title}>{steps[step - 1][success ? "successTitle" : "title"]}</h1>
            <p className={style.text}>{steps[step - 1][success ? "successSubtitle" : "subtitle"]}</p>
          </div>
        </div>
      }

      <div className={step > 0 ? style.progressBar : null}>
        {steps.map((step) => (
          <div className={style.barSection}></div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
