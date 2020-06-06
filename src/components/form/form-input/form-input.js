import React from "react";
import "./form-input.scss";

const FormInput = ({ handleChange, isValid, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className={`form-input ${isValid ? "" : "error"}`}
        {...otherProps}
        onChange={handleChange}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
