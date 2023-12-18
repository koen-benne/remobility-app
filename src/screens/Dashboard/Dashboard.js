import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import style from './Style.module.css';
import OverviewHeader from '../../components/Headers/OverviewHeader/Component';
import FormInput from '../../components/FormInput/Component';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <OverviewHeader />
      <div className={style.buttonContainer}>
        <FormInput
          type="iconButton"
          iconName="drive"
          text="Rijden"
          style={{
            height: '500px',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}
          iconStyle={{ width: '150px', height: '73px' }}
          onClick={() => navigate('/drive')}
        />
        <FormInput
          type="iconButton"
          iconName="location"
          text="Live locatie"
          style={{
            height: '500px',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}
          iconStyle={{ width: '70px', height: '101px' }}
          onClick={() => navigate('/location')}
        />
      </div>
    </>
  );
}

export default Dashboard;
