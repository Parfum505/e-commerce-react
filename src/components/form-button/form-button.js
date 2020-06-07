import React from "react";
import "./form-button.scss";

const FormButton = ({ children, handleClick, ...otherProps }) => (
  <button className="custom-button" onClick={handleClick} {...otherProps}>
    {children}
  </button>
);

export default FormButton;
