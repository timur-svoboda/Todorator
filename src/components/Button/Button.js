import React from "react";
import "./Button.css";

import PropTypes from "prop-types";

function Button(props) {
  const disabledClass = props.disabled ? "Button_disabled" : "";
  const className = `Button ${disabledClass} ${props.className || ""}`;

  const onClick = props.disabled ? null : props.onClick;

  return (
    <button className={className} onClick={onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
