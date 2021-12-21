import React from "react";
import "./TextInput.css";

import PropTypes from "prop-types";

function Input(props) {
  const className = `Input ${props.className}`;

  return (
    <input
      className={className}
      type="text"
      value={props.value}
      onInput={props.onInput}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  required: false,
  placeholder: "",
};

export default Input;
