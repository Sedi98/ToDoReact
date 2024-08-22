import React, { useState } from "react";
import style from "./container.module.css";
import TopSection from "../TopSection/TopSection";
import List from "../List/List";
import HeaderText from "../../Components/HeaderText/HeaderText";
import Footer from "../../Components/Footer/Footer";

const Container = () => {
  const [taskData, setTaskData] = useState([]);

  const handleData = (data) => {
    setTaskData(data);
    
  };
  return (
    <div className={style.container}>
      <HeaderText />
      <TopSection handleData={handleData} />
      <List data={taskData} />
      <Footer />
    </div>
  );
};

export default Container;
