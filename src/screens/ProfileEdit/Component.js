import React from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook
import style from './Style.module.css';
import ProfileEditHeader from '../../components/Headers/ProfileEditHeader/Component';
import FormInput from '../../components/FormInput/Component';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className={style.screen}>
    <ProfileEditHeader />
   <div className={style.profileAlignment}>
      <div className={style.userInfo}>
        <div className={style.userAlignment}>
          <div className={style.userName}>
            <div className={style.textSpace}>
              <h3>Voornaam</h3>
              <FormInput className={style.labelChanges} 
              type="label"
              placeholder="Jasper"
              style={{
                height: '40px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff'
              }}
            />
            </div>
            <div className={style.textSpace1}>
              <h3>Achternaam</h3>
              <FormInput className={style.labelChanges} 
              type="label"
              placeholder="de Vries"
              style={{
                height: '40px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff'
              }}
            />
            </div>
          </div>
          <div>
            <div className={style.textSpace}>
              <h3>E-mailadres</h3>
              <FormInput className={style.labelChanges} 
              type="email"
              placeholder="jasperdevries@gmail.com"
              style={{
                height: '40px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff'
              }}
            />
            </div>
          </div>
          <div>
            <div className={style.textSpace}>
              <h3>Telefoonnummer</h3>
              <FormInput className={style.labelChanges} 
              type="tel"
              placeholder="06 12345678"
              style={{
                height: '40px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff'
              }}
            />
            </div>
          </div>
        <div>
          <div className={style.textSpace}>
            <h3>Geboortedatum</h3>
            <div className={style.rowMaker}>
            <FormInput className={style.labelChanges} 
            type="label"
            placeholder="01"
            style={{
              height: '40px',
              width: '40px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff'
            }}
           />
           <FormInput className={style.labelChanges} 
            type="label"
            placeholder="01"
            style={{
              height: '40px',
              width: '40px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff'
            }}
           />
           <FormInput className={style.labelChanges} 
            type="label"
            placeholder="1985"
            style={{
              height: '40px',
              width: '40px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff'
            }}
           />
            </div>
          </div>
        </div>
        <div>
          <div className={style.textSpace2}>
            <h3>Geslacht</h3>
            <p>Man</p>
          </div>
        </div>
        </div>
        <div className={style.rowMaker}>
        <FormInput
          type="iconButton"
          iconName="empty"
          text="Annuleren"
          style={{
            height: '50px',
            width: '250px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: 'var(--color-app-gray)'
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
            width: '220px',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
          iconStyle={{ width: '1', height: '1px' }}
          onClick={() => navigate('/profile')}
        />
        </div>
      </div> 
     </div>
  </div>
  );
};

export default Profile;
