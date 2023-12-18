import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import style from './Style.module.css';
import backArrow from '../../../assets/chevron.left-white.png';
import Battery80 from '../../../assets/battery80.png';
import Internet3 from '../../../assets/internet3.png';

const DriveFooter = () => {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState(1); // Start with one blue circle

  const handleSpeedChange = () => {
    setSpeed((prevSpeed) => (prevSpeed % 3) + 1); // Cycles through 1, 2, 3
  };

  return (
      <div className={style.footer}>
          <div className={style.backArrowWhiteContainer} onClick={() => navigate('/dashboard')}>
              <img src={backArrow} alt="Back" className="back-arrow"/>
          </div>
          <div className={style.speedIndicatorContainer}>
              <div className={style.speedIndicator} onClick={handleSpeedChange}>
                  {[...Array(3)].map((_, i) => (
                      <div key={i} className={`${style.circle} ${i < speed ? style.blue : style.transparent}`} />
                  ))}
              </div>
              <p className={style.speedText}>Snelheid</p>
          </div>
          <div className={style.iconsContainer}>
              <img src={Battery80} alt="Battery Level" className='battery80'/>
              <img src={Internet3} alt="Internet Connection" className='internet3'/>
          </div>
    </div>
  );
};

export default DriveFooter;
