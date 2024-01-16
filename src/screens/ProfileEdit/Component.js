import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import style from './Style.module.css';
import ProfileEditHeader from '../../components/Headers/ProfileEditHeader/Component';
import FormInput from '../../components/FormInput/Component';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <ProfileEditHeader />
      <div className={style.buttonContainer}>
      <FormInput
          type="iconButton"
          iconName="empty"
          text="Annuleren"
          style={{
            height: '50px',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
          iconStyle={{ width: '1', height: '1px' }}
          onClick={() => navigate('/profile')}
        />
       <FormInput
          type="iconButton"
          iconName="empty"
          text="Opslaan"
          style={{
            height: '50px',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
          iconStyle={{ width: '1', height: '1px' }}
          onClick={() => navigate('/profile')}
        />
      </div>
    </>
  );
};

export default Profile;
