import React, { Component } from "react";
import "./App.css";

import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "upiec placek",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "wypic herbate",
        date: "2020-02-06",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log(`delete element with id: ${id}`);
  };

  changeTaskStatus = (id) => {
    console.log(`change status of element with id ${id}`);
  };

  render() {
    return (
      <div className="App">
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          changeTaskStatus={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
