import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import "./sign-in.scss";
import useForm from "../../hooks/useForm";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import { singInWithGoogle } from "../../firebase/firebase.utils";
import { authContext } from "../../App";

const SignIn = ({ initFormData, validateForm }) => {
  const {
    currentUser,
    setCurrentUser,
    tryToSignIn,
    setTryToSignIn,
  } = useContext(authContext);

  const loginHandler = async values => {
    setTryToSignIn(true);
    try {
      console.log("Sign in successful");
      setCurrentUser({ displayName: "Pavel", email: values.email.value });
    } catch (error) {
      setErrors({ formError: error });
    } finally {
      setTryToSignIn(false);
    }
  };
  const {
    errors,
    values,
    setErrors,
    handleSubmit,
    handleInputChange,
  } = useForm(initFormData, validateForm, loginHandler);

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (!tryToSignIn) {
      handleSubmit();
    }
  };
  const handleSingInWithGoogle = (e) => {
    e.preventDefault();
    if (!tryToSignIn) {
      setTryToSignIn(true);
      singInWithGoogle();
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
            disabled={tryToSignIn}
            handleClick={handleClickSubmit}
          >
            SIGN IN
          </FormButton>
          <FormButton
            type="submit"
            disabled={tryToSignIn}
            handleClick={handleSingInWithGoogle}
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
