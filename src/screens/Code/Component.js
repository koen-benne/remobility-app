import React from 'react';
import style from './Style.module.css';
import { useNavigate } from 'react-router';
import FormInput from '../../components/FormInput/Component';

const Code = (props) => {
  const navigate = useNavigate();
  console.log("test")

  return (
    <div className={style.screen}>
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
          onClick={() => navigate('/steps2')}
        />
      </div>
      <p className={style.text}>Elk IP-Car heeft een unieke code. Elk IP-Car begint met de code 000088224466 en houdt de laatste 4 cijfers van de desbetreffende auto ID bij je om de IP-Car te koppelen. Zie voorbeeld: 000088224466****</p>
    </div>
  );
}

export default Code;
