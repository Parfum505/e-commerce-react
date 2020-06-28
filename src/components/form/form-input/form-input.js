import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormLabelContainer,
} from "./form-input.styles";
import ErrorMessage from "../error-message/error-message";

const FormInput = ({ handleChange, error, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        className={error ? "error" : ""}
        {...otherProps}
        onChange={handleChange}
      />
      {label ? (
        <FormLabelContainer className={otherProps.value ? "shrink" : ""}>
          {label}
        </FormLabelContainer>
      ) : null}
      <ErrorMessage message={error} className="auth-form" />
    </GroupContainer>
  );
};

export default FormInput;
