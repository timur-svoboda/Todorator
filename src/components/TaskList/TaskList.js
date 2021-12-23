import React from "react";
import "./TaskList.css";

import Wrapper from "../Wrapper/Wrapper";
import Task from "../Task/Task";

import PropTypes from "prop-types";

function TaskList(props) {
  const tasks = props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        className="TaskList-task"
        text={task.text}
        done={task.done}
        onClick={() => props.onCheckboxClick(task.id)}
        onRemove={() => props.onTaskRemove(task.id)}
      />
    );
  });

  return (
    <section className="TaskList">
      <Wrapper className="TaskList-wrapper">
        <header className="TaskList-headerSection">
          <h1 className="TaskList-header">{props.header}</h1>
          <div className="TaskList-counter">{props.tasks.length}</div>
        </header>
        <ul className="TaskList-taskList">{tasks}</ul>
      </Wrapper>
    </section>
  );
}

TaskList.propTypes = {
  header: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
};

export default TaskList;
