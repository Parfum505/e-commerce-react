import React from "react";
import "./form-input.scss";

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
      {error ? <span className="form-input-error">{error}</span> : null}
    </div>
  );
};

export default FormInput;
