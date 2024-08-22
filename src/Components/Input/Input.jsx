import React, { useState, useEffect } from "react";
import style from "./input.module.css";

const Input = ({ placeholder, valueFunc, isClear }) => {
  useEffect(() => {
    setTask("");
  }, [isClear]);
  const [task, setTask] = useState("");
  return (
    <input
      type="text"
      value={task}
      onChange={(event) => {
        setTask(event.target.value);
        valueFunc(event.target.value);
      }}
      className={style.input}
      placeholder={placeholder}
    />
  );
};

export default Input;
