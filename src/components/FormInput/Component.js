import React from 'react';
import style from './Style.module.css';

const FormInput = (props) => {

  if (props.type === "iconButton") {
    if (!props.iconName) {
      throw new Error("Missing iconName prop");
    }
    if (!props.text) {
      throw new Error("Missing text prop");
    }

    const iconSrc = require(`../../assets/${props.iconName}icon.png`);

    return (
      <div className={style.iconButton} onClick={props.onClick} style={props.style}>
        {iconSrc && <img src={iconSrc} alt={props.text} style={props.iconStyle} />}
        <p>{props.text}</p>
      </div>
    );
  } else {
    return (
      <div className={`
        ${props.type === "checkbox" ? style.checkboxContainer : style.container}
      `}>
        {
          props.label &&
          <label className={style.label}>{props.label}</label>
        }
        <input
          className={`${style.input} ${style[props.type]}`}
          {...props}
        />
      </div>
    );
  }
}

export default FormInput;
