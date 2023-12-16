import React from 'react';
import stylecss from './Style.module.css';

const FormInput = (props) => {

  return (
    <div className={`
      ${props.type === "checkbox" ? stylecss.checkboxContainer : stylecss.container}
    `}>
      {
        props.label &&
        <label className={stylecss.label}>{props.label}</label>
      }
      <input
        className={`${stylecss.input} ${stylecss[props.type]}`}
        {...props}
      />
    </div>
  );
}

export default FormInput;
