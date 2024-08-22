import React from "react";
import style from "./main.module.css";
import Animation from "../../Components/Animation/Animation";
import Container from "../../Sections/Container/Container";

const Main = () => {
  return (
    <div className={style.main}>
    <Animation/>
    <Container/>
    </div>
  );
};

export default Main;
