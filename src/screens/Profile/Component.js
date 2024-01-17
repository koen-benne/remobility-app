import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import style from './Style.module.css';
import ProfileHeader from '../../components/Headers/ProfileHeader/Component';
import FormInput from '../../components/FormInput/Component';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className={style.screen}>
      <ProfileHeader />
     <div className={style.profileAlignment}>
        <div className={style.userInfo}>
          <div className={style.userAlignment}>
            <div className={style.userName}>
              <div className={style.textSpace}>
                <h3>Voornaam</h3>
                <p>Jasper</p>
              </div>
              <div className={style.textSpace1}>
                <h3>Achternaam</h3>
                <p>de Vries</p>
              </div>
            </div>
            <div>
              <div className={style.textSpace}>
                <h3>E-mailadres</h3>
                <p>jasperdevries@gmail.com</p>
              </div>
            </div>
            <div>
              <div className={style.textSpace}>
                <h3>Telefoonnummer</h3>
                <p>06 12345678</p>
              </div>
            </div>
            <div>
              <div className={style.textSpace}>
                <h3>Geboortedatum</h3>
                <p>01-01-1985</p>
              </div>
            </div>
            <div>
              <div className={style.textSpace2}>
                <h3>Geslacht</h3>
                <p>Man</p>
              </div>
            </div>
          </div>
          <div className={style.buttonContainer1}>
          <FormInput
            type="iconButton"
            iconName="empty"
            text="Profiel bewerken"
            style={{
              height: '50px',
              width: '500px',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}
            iconStyle={{ width: '1', height: '1px' }}
            onClick={() => navigate('/editprofile')}
          />
          </div>
        </div> 
        <div className={style.buttonContainer}>
        <FormInput
            type="iconButton"
            iconName="car"
            text="Jouw auto's"
            style={{
              height: '500px',
              width: '600px',
              fontSize: '2.5rem',
              fontWeight: 'bold'
            }}
            iconStyle={{ width: '150px', height: '73px' }}
            onClick={() => navigate('/cars')}
          />
        </div>
       </div>
    </div>
  );
};

export default Profile;
