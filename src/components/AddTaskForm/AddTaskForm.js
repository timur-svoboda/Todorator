import React from "react";
import "./AddTaskForm.css";

import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

import PropTypes from "prop-types";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskText: "" };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState(() => ({ taskText: e.target.value }));
  }

  handleSubmit(e) {
    if (this.state.taskText) {
      this.props.onSubmit(e, this.state.taskText);
      this.setState(() => ({ taskText: "" }));
    }
  }

  render() {
    return (
      <form className="AddTaskForm" onSubmit={this.handleSubmit} name="task">
        <TextInput
          className="AddTaskForm-taskField"
          value={this.state.taskText}
          onInput={this.handleInput}
          name="text"
          placeholder="Input a task"
          required
        />
        <Button
          className="AddTaskForm-confirmButton"
          disabled={!this.state.taskText.length}
        >
          Add a new task
        </Button>
      </form>
    );
  }
}

AddTaskForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default AddTaskForm;
