import React from "react";
import "./Wrapper.css";

import PropTypes from "prop-types";

function Wrapper(props) {
  return <div className={"Wrapper " + props.className}>{props.children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Wrapper;
