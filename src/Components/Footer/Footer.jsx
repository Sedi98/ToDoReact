import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        Copyright &copy;
        {new Date().getFullYear() === 2024
          ? " "
          : `-${new Date().getFullYear()}`}{" "}
        Sadi Mammadov. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
