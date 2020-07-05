import React from "react";
import "./TaskList.css";

import Task from "../Task/Task";

const TaskList = () => {
  return (
    <div>
      <h1>Task List</h1>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
