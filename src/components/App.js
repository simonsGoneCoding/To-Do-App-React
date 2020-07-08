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
      {
        id: 3,
        text: "umyc dupe",
        date: "2020-02-07",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "kupic ziolo",
        date: "2020-02-09",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((item) => item.id === id);
    tasks.splice(taskIndex, 1);

    this.setState({ tasks });
  };

  changeTaskStatus = (id) => {
    console.log(`change status of element with id ${id}`);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({ tasks });
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
