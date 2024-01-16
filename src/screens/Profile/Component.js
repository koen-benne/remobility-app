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
      <div className={style.buttonContainer}>
      <FormInput
          type="iconButton"
          iconName="empty"
          text="Profiel bewerken"
          style={{
            height: '50px',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
          iconStyle={{ width: '1', height: '1px' }}
          onClick={() => navigate('/editprofile')}
        />
        <FormInput
          type="iconButton"
          iconName="car"
          text="Jouw auto's"
          style={{
            height: '500px',
            fontSize: '2.5rem',
            fontWeight: 'bold'
          }}
          iconStyle={{ width: '150px', height: '73px' }}
          onClick={() => navigate('/cars')}
        />
      </div>
    </div>
  );
};

export default Profile;
