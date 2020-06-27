import React from "react";
import { ButtonContainer } from "./form-button.styles";

const FormButton = ({ children, handleClick, ...otherProps }) => {
  let classesArr = ["custom-button"];
  const customClasses = otherProps.classes;

  classesArr =
    customClasses && customClasses.length
      ? classesArr.concat(customClasses)
      : classesArr;
  return (
    <ButtonContainer
      className={classesArr.join(" ")}
      {...otherProps}
    >
      {children}
    </ButtonContainer>
  );
};

export default FormButton;
