import React from "react";
import FormInput from "./form-input/form-input";
import FormButton from "./form-button/form-button";

const Form = ({ initFormData, formData, setFormData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(initFormData);
  };
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[name] = {
        ...prevState[name],
        value: value,
      };
      return newState;
    });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      {Object.keys(formData).map((el) => {
        const input = formData[el];
        return (
          <FormInput
            key={input.name + "_" + new Date()}
            type={input.type}
            name={input.name}
            isValid={input.isValid}
            value={input.value}
            label={input.label}
            handleChange={handleInputChange}
          />
        );
      })}
      <FormButton type="submit">SIGN IN</FormButton>
    </form>
  );
};

export default Form;
