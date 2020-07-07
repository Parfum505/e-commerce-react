import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import useForm from "../../hooks/useForm";
import FormInput from "../form/form-input/form-input";
import FormButton from "../form/form-button/form-button";
import ErrorMessage from "../form/error-message/error-message";
import { googleAuthStart, emailAuthStart } from "../../redux/user/user-actions";
import {
  selectCurrentUser,
  selectUserLoading,
  selectUserErrors,
} from "../../redux/user/user-selectors";
import { FormContainer, ButtonsContainer } from "../form/form.styles";

const SignIn = ({
  initFormData,
  validateForm,
  currentUser,
  loading,
  authErrors,
  googleAuthStartHandler,
  emailAuthStartHandler,
}) => {
  const signInHandler = (values) => {
    const { email, password } = values;
    emailAuthStartHandler({ email: email.value, password: password.value });
  };
  const { errors, values, handleSubmit, handleInputChange } = useForm(
    initFormData,
    validateForm,
    signInHandler
  );

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      handleSubmit();
    }
  };
  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    if (!loading) {
      googleAuthStartHandler();
    }
  };

  return (
    <FormContainer>
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
        <ButtonsContainer>
          <FormButton
            type="submit"
            disabled={loading}
            onClick={handleClickSubmit}
          >
            SIGN IN
          </FormButton>
          <FormButton
            type="button"
            disabled={loading}
            onClick={handleSignInWithGoogle}
            classes={["google-sign-in"]}
          >
            SIGN IN WITH GOOGLE
          </FormButton>
        </ButtonsContainer>
      </form>
      <ErrorMessage message={authErrors || ""} />
    </FormContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loading: selectUserLoading,
  authErrors: selectUserErrors,
});
const mapDispatchToProps = (dispatch) => ({
  googleAuthStartHandler: () => dispatch(googleAuthStart()),
  emailAuthStartHandler: (emailAndPassword) =>
    dispatch(emailAuthStart(emailAndPassword)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
