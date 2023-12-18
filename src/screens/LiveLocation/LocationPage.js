import React from 'react';
import './LocationPage.css';
import backgroundImage from  '../../assets/map.png';
import LocationHeader from '../../components/Headers/LocationHeader/Component';
import Vector from '../../assets/vector.png';
import Battery80 from '../../assets/battery80.png';
import Internet3 from '../../assets/internet3.png';

function LocationPage() {

  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
  };

  return (
    <>
    <LocationHeader />
      <div className="location-page" style={pageStyle}>
          <div className="mini-dynamic-island">
          <img src={Battery80} alt="battery80" className='battery80'/>
          <img src={Internet3} alt="internet3" className='internet3'/>
            <div className="vector-graphic">
              <img src={Vector} alt="vector"/>
            </div>
          </div>
      </div>
    </>
  );
}

export default LocationPage;
