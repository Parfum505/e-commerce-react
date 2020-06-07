import React from "react";
import "./sign-in.scss";
import useForm from "../../hooks/useForm";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";

const SignIn = ({ initFormData, validateForm }) => {
  const login = (values) => {
    console.log(values);
  };
  const {
    errors,
    values,
    isLoading,
    handleSubmit,
    handleInputChange,
  } = useForm(initFormData, validateForm, login);

  const handleClick = (e) => {
    e.preventDefault();
    if (!isLoading) {
      handleSubmit();
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <p>Sign in with your email end password.</p>

      <form action="" onSubmit={(e) => e.preventDefault()} noValidate>
        {Object.keys(values).map((name) => {
          const input = values[name];
          return (
            <FormInput
              key={name}
              type={input.type}
              label={input.label}
              name={name}
              value={input.value}
              error={errors[name] || ""}
              handleChange={handleInputChange}
            />
          );
        })}
        <FormButton
          type="submit"
          disabled={isLoading}
          handleClick={handleClick}
        >
          SIGN IN
        </FormButton>
      </form>
    </div>
  );
};

export default SignIn;
