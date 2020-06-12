import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { authContext } from "../../App";
import "./sign-in.scss";
import useForm from "../../hooks/useForm";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import ErrorMessage from "../error-message/error-message";

const SignIn = ({ initFormData, validateForm }) => {
  const { currentUser, loading, setLoading } = useContext(authContext);

  const signInHandler = async (values) => {
    setLoading(true);
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      setErrors({ formError: error.message });
    } finally {
      setLoading(false);
    }
  };
  const {
    errors,
    values,
    setErrors,
    handleSubmit,
    handleInputChange,
  } = useForm(initFormData, validateForm, signInHandler);

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      handleSubmit();
    }
  };
  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      signInWithGoogle();
    }
  };

  return (
    <div className="sign-in  sign-form">
      {currentUser ? <Redirect to="/" /> : null}
      <h2 className="title">I already have an account</h2>
      <p className="subtitle">Sign in with your email end password.</p>

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
            disabled={loading}
            handleClick={handleClickSubmit}
          >
            SIGN IN
          </FormButton>
          <FormButton
            type="submit"
            disabled={loading}
            handleClick={handleSignInWithGoogle}
            classes={["google-sign-in"]}
          >
            SIGN IN WITH GOOGLE
          </FormButton>
        </div>
      </form>
      <ErrorMessage message={errors.formError || ""} />
    </div>
  );
};

export default SignIn;
