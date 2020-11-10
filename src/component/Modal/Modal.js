import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ toggleCard, image }) => {
  return (
    <div className="Overlay" onClick={toggleCard}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
