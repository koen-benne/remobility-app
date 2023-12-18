import React from 'react';
import backgroundImage from '../../assets/drive-background.png';
import DriveFooter from '../../components/Footers/DriveFooter/Component';
import style from './Style.module.css';

function Drive() {

  return (
    <div className={style.drivePage}>
      <div className={style.backgroundImageContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Content above the footer */}
      </div>
      <DriveFooter/>
    </div>
  );
}

export default Drive;
