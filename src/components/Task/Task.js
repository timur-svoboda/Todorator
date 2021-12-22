import React from "react";
import "./Task.css";

import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

import PropTypes from "prop-types";

function Task(props) {
  return (
    <li className={`Task ${props.className}`}>
      <Checkbox
        className="Task-checkbox"
        name="task"
        label={props.text}
        onClick={props.onClick}
        checked={props.done}
      />
      <Button className="Task-removeBtn" onClick={props.onRemove}>
        Remove
      </Button>
    </li>
  );
}

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool,
  className: PropTypes.string,
};

Task.defaultProps = {
  done: false,
  className: "",
};

export default Task;
