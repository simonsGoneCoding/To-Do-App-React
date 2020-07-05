import React from "react";
import "./App.css";

import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
