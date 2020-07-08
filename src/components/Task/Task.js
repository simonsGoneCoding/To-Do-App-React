import React from "react";

const Task = (props) => {
  const { text, date, id } = props.task;

  return (
    <div>
      <p>
        <strong>{text}</strong> do <span>{date} </span>
        <button onClick={() => props.changeTaskStatus(id)}>Done</button>
        <button onClick={() => props.deleteTask(id)}>X</button>
      </p>
    </div>
  );
};

export default Task;
