import React from "react";
import "./error-message.scss";

const ErrorMessage = ({ message }) => {
  let errorMessage = null;
  if (message) {
    errorMessage = <span className="error-message">{message}</span>;
  }
  return errorMessage;
};

export default ErrorMessage;
