import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import "./sign-in.scss";
import useForm from "../../hooks/useForm";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import { singInWithGoogle } from "../../firebase/firebase.utils";
import { CurrentUserContext } from "../../App";

const SignIn = ({ initFormData, validateForm }) => {
  const [currentUser] = useContext(CurrentUserContext);
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
      {currentUser ? <Redirect to="/" /> : null}
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
        <div className="buttons">
          <FormButton
            type="submit"
            disabled={isLoading}
            handleClick={handleClick}
          >
            SIGN IN
          </FormButton>
          <FormButton
            type="submit"
            handleClick={singInWithGoogle}
            classes={["google-sign-in"]}
          >
            SIGN IN WITH GOOGLE
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
