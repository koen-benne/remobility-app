import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import HeaderOverview from '../Headers/HeaderOverview';
import './Dashboard.css';
import FormInput from '../../components/FormInput/Component';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderOverview />
      <div className="button-container">
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
