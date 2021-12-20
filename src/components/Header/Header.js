import React from "react";
import "./Header.css";

import Wrapper from "../Wrapper/Wrapper";

import PropTypes from "prop-types";

function Header(props) {
  return (
    <header className="Header">
      <Wrapper className="Header-wrapper">
        <span className="Header-logo">Todorator</span>
        {props.right}
      </Wrapper>
    </header>
  );
}

Header.propTypes = { right: PropTypes.element };

export default Header;
