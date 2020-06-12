import React from "react";
import "./form-input.scss";
import ErrorMessage from "../error-message/error-message";

const FormInput = ({ handleChange, error, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className={`form-input ${error ? "error" : ""}`}
        {...otherProps}
        onChange={handleChange}
      />
      {label ? (
        <label
          className={`${otherProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
      <ErrorMessage message={error} />
    </div>
  );
};

export default FormInput;
