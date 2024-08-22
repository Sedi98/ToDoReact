import React from "react";
import style from "./button.module.css";

const Button = ({ click , title}) => {
  return <button className={style.button} onClick={click} type="button">{title}</button>;
};

export default Button;
