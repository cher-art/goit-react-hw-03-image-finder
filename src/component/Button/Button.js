import styled from "./Button.module.css";
import React from "react";
import PropTypes from "prop-types";

const Button = ({ loadMore }) => {
  return (
    <button type="button" className={styled.Button} onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {};

export default Button;
