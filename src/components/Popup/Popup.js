import React from "react";
import "./Popup.css";

import Button from "../Button/Button";

import PropTypes from "prop-types";

function Popup(props) {
  if (!props.show) return null;

  return (
    <div className="Popup-overlay" onClick={props.onClose}>
      <aside
        className={`Popup ${props.className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="Popup-header">{props.header}</h1>
        <div className="Popup-main">{props.children}</div>
        <footer className="Popup-buttons">
          {props.onCancel && (
            <Button className="Popup-cancelButton" onClick={props.onCancel}>
              {props.cancelButtonText}
            </Button>
          )}
          <Button className="Popup-okButton" onClick={props.onOk}>
            {props.okButtonText}
          </Button>
        </footer>
      </aside>
    </div>
  );
}

Popup.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  header: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  okButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

Popup.defaultProps = {
  show: false,
  className: "",
  okButtonText: "Ok",
  cancelButtonText: "Cancel",
};

export default Popup;
