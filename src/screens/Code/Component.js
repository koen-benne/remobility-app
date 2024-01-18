import React from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router';
import FormInput from '../../components/FormInput/Component';
import BackButton from '../../components/BackButton/Component';
import { useRecoilState, atom } from 'recoil';

const successState = atom({
  key: 'successState',
  default: false,
});

const Code = (props) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useRecoilState(successState);
  console.log("test")


  function onSuccess() {
    setSuccess(true);
    navigate('/steps');
  }

  return (
    <div className={style.screen}>
      <BackButton onClick={() => navigate('/steps')}/>
      <h1 className={style.title}>Voer de koppelcode van de IP-Car in</h1>
      <div className={style.input}>
        <FormInput
          type="text"
          placeholder="Code"
          style={{
            fontSize: '2.5rem',
            height: '4rem',
          }}
        />
        <FormInput
          type="submit"
          value="Sturen"
          style={{
            height: '4rem',
            fontSize: '2rem',
            padding: '0 2rem',
            marginLeft: '50px',
            fontWeight: 'bold',
          }}
          onClick={onSuccess}
        />
      </div>
      <p className={style.text}>Elk IP-Car heeft een unieke code. Elk IP-Car begint met de code 000088224466 en houdt de laatste 4 cijfers van de desbetreffende auto ID bij je om de IP-Car te koppelen. Zie voorbeeld: 000088224466****</p>
    </div>
  );
}

export default Code;
