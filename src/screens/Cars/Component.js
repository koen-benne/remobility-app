import React from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import FormInput from '../../components/FormInput/Component';
import backArrow from '../../assets/chevron.left-white.png';


function Cars() {
const navigate = useNavigate();

  return (
    <div className={style.screen}>
      <header className={style.carsHeader}>
        <div className={style.sideButton} onClick={() => navigate('/profile')}>
          <img src={backArrow} alt="Back" className="back-arrow"/>
        </div>
          <h1>Auto's</h1>
        <div className={style.sideButton}></div>
      </header>
      <div className={style.rowMaker}>
        <FormInput
          type="iconButton"
          text="IP-Car 123456"
          iconName="delete"
          style={{
            height: '250px',
            width: '250px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
          iconStyle={{ width: '48px', height: '48px' }}
        />
       <FormInput
          type="iconButton"
          text="IP-Car 123456"
          iconName="deletecolor"
          style={{
            height: '250px',
            width: '250px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--color-black)',
            backgroundColor: 'var(--color-white)'
          }}
          iconStyle={{ width: '48px', height: '48px' }}
        />
        <FormInput
          type="iconButton"
          text="IP-Car 123456"
          iconName="deletecolor"
          style={{
            height: '250px',
            width: '250px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--color-black)',
            backgroundColor: 'var(--color-white)'
          }}
          iconStyle={{ width: '48px', height: '48px' }}
        />
      </div>
      <div className={style.rowMaker}>
        <FormInput
          type="iconButton"
          text="IP-Car 123456"
          iconName="deletecolor"
          style={{
            height: '250px',
            width: '250px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--color-black)',
            backgroundColor: 'var(--color-white)'
          }}
          iconStyle={{ width: '48px', height: '48px' }}
        />
       <FormInput
          type="iconButton"
          text="IP-Car 123456"
          iconName="deletecolor"
          style={{
            height: '250px',
            width: '250px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--color-black)',
            backgroundColor: 'var(--color-white)'
          }}
          iconStyle={{ width: '48px', height: '48px' }}
        />
        <FormInput
          type="iconButton"
          text="."
          iconName="add"
          style={{
            height: '250px',
            width: '250px',
            fontSize: '0rem',
            fontWeight: 'bold',
            backgroundColor: 'var(--color-app-gray)'
          }}
          iconStyle={{ width: '100px', height: '100px' }}
        />
      </div>
    </div> 
  );
}

export default Cars;
