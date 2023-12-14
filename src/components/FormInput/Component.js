import React from 'react';
import style from './Style.module.css';

const FormInput = (props) => {
  const { label, placeholder, type, value, onChange, onClick, disabled } = props;
  console.log(value)

  return (
    <div className={`
      ${type === "checkbox" ? style.checkboxContainer : style.container}
    `}>
      {
        label &&
        <label className={style.label}>{label}</label>
      }
      <input
        className={`${style.input} ${style[type]}`}
        type={type}
        placeholder={placeholder}
        value={value}
        // onChange={onChange}
        // onClick={onClick}
        // disabled={disabled}
      />
    </div>
  );
}

export default FormInput;
