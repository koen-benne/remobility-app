import React from 'react';
import style from './Style.module.css';
import backgroundImage from  '../../assets/map.png';
import LocationHeader from '../../components/Headers/LocationHeader/Component';
import Vector from '../../assets/vector.png';
import Battery80 from '../../assets/battery80.png';
import Internet3 from '../../assets/internet3.png';

function Location() {

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
      <div className={style.locationPage} style={pageStyle}>
          <div className={style.miniDynamicIsland}>
          <img src={Battery80} alt="battery80" className={style.battery80}/>
          <img src={Internet3} alt="internet3" className={style.internet3}/>
            <div className={style.vectorGraphic}>
              <img src={Vector} alt="vector"/>
            </div>
          </div>
      </div>
    </>
  );
}

export default Location;
