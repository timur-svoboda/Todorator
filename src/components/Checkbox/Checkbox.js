import React from "react";
import "./Checkbox.css";

import PropTypes from "prop-types";

function Checkbox(props) {
  const checkedClassForText = props.checked ? "Checkbox-text_checked" : "";

  return (
    <label className={`Checkbox ${props.className}`} onClick={props.onClick}>
      <input className="Checkbox-field" type="checkbox" name={props.name} />
      <span className={"Checkbox-text " + checkedClassForText}>
        {props.label}
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  className: "",
  checked: false,
};

export default Checkbox;
