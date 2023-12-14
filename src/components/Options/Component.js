import React from 'react';
import style from './Style.module.css';
import FormInput from '../FormInput/Component';

const Options = (props) => {
  const { options } = props;
  const [selectedOption, setSelectedOption] = React.useState(0);

  return (
    <div className={style.options}>
      <div className={style.selector}>
        {options.map((option, index) => (
          <button
            className={style.optionButton}
            style={index === selectedOption ? {} : { opacity: "60%" } }
            onClick={() => setSelectedOption(index)}
          >
          {option.option}
          </button>
        ))}
      </div>
      <div className={style.option}>
        {options[selectedOption].fields.map((field, index) => (
          <FormInput label={field.label} placeholder={field.placeholder} type={field.type} value={field.value} onClick={field.onClick} />
        ))}
      </div>
    </div>
  );
}

export default Options;
