import React, { useState, useEffect } from "react";
import style from "./top.module.css";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const TopSection = ({ handleData }) => {
  const [task, setTask] = useState("");
  const [listData, setListData] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    handleData(listData);
    localStorage.setItem("data", JSON.stringify(listData));
  }, [listData]);

  const handleClick = () => {
    if (task === "") {
      alert("Enter Task");
      return;
    }
    setListData([...listData, { task, completed: false }]);

    handleData(listData);

    setClear(!clear);

    setTask("");
  };

  const handleInput = (value) => {
    setTask(value);
  };

  return (
    <div className={style.rowContent}>
      <Input
        placeholder={"Enter Task"}
        valueFunc={handleInput}
        isClear={clear}
      />
      <Button title="Add" click={handleClick} />
    </div>
  );
};

export default TopSection;
