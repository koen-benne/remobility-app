import React, { useEffect, useState } from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router';
import FormInput from '../../components/FormInput/Component';

const Steps = (props) => {
  const steps = [
    {
      icon: "",
      title: "Controller Aansluiten",
      subtitle: "Als eerst moeten we de controller aansluiten. Zorg dat de controller aanstaat, dan kan deze gekoppeld worden. Als die gekoppeld is gaan we door.",
      successIcon: "test",
      successTitle: "Controller Gevonden",
      successSubtitle: "De controller is gevonden en gekoppeld.",
    },
    {
      icon: "",
      title: "Car Koppelen",
      subtitle: "Scan de QR-code of voer koppelcode in om een auto toe te voegen.",
      options: [
        {
          placeholder: "Scan de QR-code",
          value: "QR-code",
          fontSize: "3rem",
          height: "350px",
          style: {
            fontSize: "3rem",
            height: "350px",
            borderRadius: "20px",
          },
          onClick: () => console.log("Qr-code"),
        },
        {
          placeholder: "Voer de koppelcode in",
          value: "Koppelcode",
          style: {
            fontSize: "3rem",
            height: "350px",
            borderRadius: "20px",
          },
          onClick: () => console.log("Koppelcode"),
        },
      ],
      successIcon: "test",
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
          onClick: () => navigate('/login'),
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const options = (steps[step - 1] || {})[success ? "successOptions" : "options"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (step === 2) {
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
      }

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

export default Steps;
