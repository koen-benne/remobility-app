import React from 'react';
import backgroundImage from '../../assets/drive-background.png';
import DriveFooter from '../../components/Footers/DriveFooter/Component';
import './DrivePage.css';

function DrivePage() {

  return (
    <div className="drive-page">
      <div className="background-image-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Content above the footer */}
      </div>
      <DriveFooter/>
    </div>
  );
}

export default DrivePage;
