import React from "react";
import "./TaskList.css";

import Task from "../Task/Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task
      task={task}
      key={task.id}
      deleteTask={props.deleteTask}
      changeTaskStatus={props.changeTaskStatus}
    />
  ));

  return (
    <div>
      <div className="active">
        <h3>TO DO LIST</h3>
        {tasks}
      </div>
      <div className="inactive">
        <h3>FINISHED (0)</h3>
      </div>
    </div>
  );
};

export default TaskList;
