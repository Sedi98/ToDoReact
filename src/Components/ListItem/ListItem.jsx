import React from "react";
import style from "./item.module.css";

const ListItem = ({ text, count, completed, clickFunc, onDelete }) => {
  return (
    <div className={completed ? style.itemCompleted : style.item}>
      <p className={style.itemCount}>{count}</p>
      <p
        className={style.itemTitle}
        onClick={() => {
          clickFunc(count - 1);
        }}
      >
        {text}{" "}
      </p>
      <p onClick={()=> onDelete(count - 1)} className={style.itemDelete}>
        <i className="bx bx-trash"></i>
      </p>
    </div>
  );
};

export default ListItem;
