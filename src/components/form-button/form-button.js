import React from "react";
import "./form-button.scss";

const FormButton = ({ children, handleClick, ...otherProps }) => {
  let classesArr = ["custom-button"];
  const customClasses = otherProps.classes;

  classesArr =
    customClasses && customClasses.length
      ? classesArr.concat(customClasses)
      : classesArr;
  return (
    <button
      className={classesArr.join(" ")}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default FormButton;
