import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import HeaderOverview from '../Headers/HeaderOverview';
import ButtonPanel from '../ButtonPanel/ButtonPanel'; // Adjust this path if necessary
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderOverview />
      <div className="button-container">
        <ButtonPanel text="Rijden" iconName="drive" iconWidth="150px" iconHeight="73px" onClick={() => navigate('/drive')} />
        {/* Added an onClick event to the "Live locatie" button */}
        <ButtonPanel text="Live locatie" iconName="location" iconWidth="70px" iconHeight="101px"  onClick={() => navigate('/location')} />
      </div>
    </>
  );
}

export default Dashboard;
