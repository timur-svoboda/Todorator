import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import AddTaskPopup from "./components/AddTaskPopup/AddTaskPopup";
import Button from "./components/Button/Button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 0,
          text: "bla1",
          done: false,
        },
        {
          id: 1,
          text: "bla2",
          done: false,
        },
        {
          id: 2,
          text: "bla3",
          done: true,
        },
      ],
      showAddTaskPopup: false,
      windowWidth: window.innerWidth,
    };

    this.handleAddTaskFormSubmit = this.handleAddTaskFormSubmit.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleAddTaskPopupClose = this.handleAddTaskPopupClose.bind(this);
    this.handleAddTaskPopupCancel = this.handleAddTaskPopupCancel.bind(this);
    this.handleAddTaskPopupOk = this.handleAddTaskPopupOk.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleTaskRemove = this.handleTaskRemove.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleHeaderAddButtonClick =
      this.handleHeaderAddButtonClick.bind(this);
  }

  handleAddTaskFormSubmit(e, taskText) {
    if (!taskText.length) return;

    this.setState((state) => {
      const id = state.tasks.at(-1) ? state.tasks.at(-1).id + 1 : 0;
      const tasks = state.tasks.slice();
      tasks.push({ id, text: taskText, done: false });
      return { tasks };
    });

    e.preventDefault();
  }

  handleAddButtonClick() {
    this.setState(() => ({ showAddTaskPopup: true }));
  }

  handleAddTaskPopupClose() {
    this.setState(() => ({ showAddTaskPopup: false }));
  }

  handleAddTaskPopupCancel() {
    this.setState(() => ({ showAddTaskPopup: false }));
  }

  handleAddTaskPopupOk(taskText) {
    this.setState(() => ({ showAddTaskPopup: false }));
    this.setState((state) => {
      const tasks = state.tasks.slice();
      const id = tasks.at(-1) ? tasks.at(-1).id + 1 : 0;
      tasks.push({
        id,
        text: taskText,
        done: false,
      });
      return { tasks };
    });
  }

  handleCheckboxClick(id) {
    this.setState((state) => {
      const tasks = state.tasks.slice();

      const i = tasks.findIndex((task) => task.id === id);
      const { text, done } = tasks[i];

      tasks.splice(i, 1, {
        id,
        text,
        done: !done,
      });

      return { tasks };
    });
  }

  handleTaskRemove(id) {
    this.setState((state) => {
      const tasks = state.tasks.slice();

      const i = tasks.findIndex((task) => task.id === id);
      tasks.splice(i, 1);

      return { tasks };
    });
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleHeaderAddButtonClick() {
    this.setState(() => ({ showAddTaskPopup: true }));
  }

  render() {
    const undoneTasks = this.state.tasks.filter((item) => !item.done);
    const doneTasks = this.state.tasks.filter((item) => item.done);

    let headerRight;
    if (this.state.windowWidth >= 576) {
      headerRight = <AddTaskForm onSubmit={this.handleAddTaskFormSubmit} />;
    } else {
      headerRight = (
        <Button onClick={this.handleHeaderAddButtonClick}>Add Task</Button>
      );
    }

    return (
      <div className="App">
        <Header handleAddingTask={this.handleAddingTask} right={headerRight} />
        <main className="App-main">
          <TaskList
            header="ToDo"
            tasks={undoneTasks}
            onCheckboxClick={this.handleCheckboxClick}
            onTaskRemove={this.handleTaskRemove}
          />
          <TaskList
            header="Done"
            tasks={doneTasks}
            onCheckboxClick={this.handleCheckboxClick}
            onTaskRemove={this.handleTaskRemove}
          />
        </main>
        <AddTaskPopup
          show={this.state.showAddTaskPopup}
          onClose={this.handleAddTaskPopupClose}
          onCancel={this.handleAddTaskPopupCancel}
          onOk={this.handleAddTaskPopupOk}
        />
      </div>
    );
  }
}

export default App;
