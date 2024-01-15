import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import style from './Style.module.css';
import ProfileHeader from '../../components/Headers/ProfileHeader/Component';
import FormInput from '../../components/FormInput/Component';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>  
      <ProfileHeader />
      <div className={style.buttonContainer}>
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
          onClick={() => navigate('/location')}
        />
      </div>
    </>
    
  );
};

export default Profile;
