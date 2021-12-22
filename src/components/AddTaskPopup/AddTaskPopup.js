import React from "react";
import "./AddTaskPopup.css";

import PropTypes from "prop-types";

import Popup from "../Popup/Popup";
import TextInput from "../TextInput/TextInput";

class AddTaskPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { taskText: "" };

    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClose() {
    if (this.props.onClose) this.props.onClose();
    this.setState(() => ({ taskText: "" }));
  }

  handleCancel() {
    if (this.props.onCancel) this.props.onCancel();
    this.setState(() => ({ taskText: "" }));
  }

  handleOk() {
    this.props.onOk(this.state.taskText);
    this.setState(() => ({ taskText: "" }));
  }

  handleInput(e) {
    this.setState(() => ({ taskText: e.target.value }));
  }

  render() {
    return (
      <Popup
        className={`AddTaskPopup ${this.props.className}`}
        header="Add a task"
        show={this.props.show}
        onClose={this.handleClose}
        onCancel={this.handleCancel}
        onOk={this.handleOk}
        okButtonText="Add"
      >
        <label className="AddTaskPopup-taskLabel">
          Task:
          <TextInput
            className="AddTaskPopup-taskInupt"
            value={this.state.taskText}
            onInput={this.handleInput}
            name="text"
            placeholder="Input a task"
          />
        </label>
      </Popup>
    );
  }
}

AddTaskPopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  onOk: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

AddTaskPopup.defaultProps = {
  className: "",
  show: false,
};

export default AddTaskPopup;
