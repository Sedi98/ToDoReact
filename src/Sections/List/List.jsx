import React, { useState, useEffect } from "react";
import style from "./list.module.css";
import ListItem from "../../Components/ListItem/ListItem";

const List = ({ data }) => {
  const [ischanged, setischanged] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [ischanged]);

  const handleClick = (index) => {
    data[index].completed = !data[index].completed;

    setischanged(ischanged + 1);
  };

  const handleDelete = (index) => {
    console.log(index);
    
    let confirmation = window.confirm("Are you sure want to delete?");

    if (confirmation) {
      data.splice(index, 1);
      setischanged(ischanged + 1);
    }
  };
  return (
    <div className={style.list}>
      {data ? (
        data.map((item, index) => (
          <ListItem
            key={index}
            count={index + 1}
            text={item.task}
            completed={item.completed}
            clickFunc={handleClick}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
};

export default List;
