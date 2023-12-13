import React from 'react';
import Header from '../HeaderOverview/Header';
import ButtonPanel from '../ButtonPanel/ButtonPanel'; // Adjust this path if necessary
import './Dashboard.css'; // Make sure this is the correct path to your CSS file

function Dashboard() {
  return (
    <>
      <Header />
      <div className="button-container">
      <ButtonPanel text="Rijden" iconName="drive" iconWidth="150px" iconHeight="73px" />
      <ButtonPanel text="Live locatie" iconName="location" iconWidth="70px" iconHeight="101px" />
      </div>
    </>
  );
}

  

export default Dashboard;
