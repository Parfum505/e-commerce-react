import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import useForm from "../../hooks/useForm";
import FormInput from "../form/form-input/form-input";
import FormButton from "../form/form-button/form-button";
import { auth, creatUserProfileDocument } from "../../firebase/firebase.utils";
import ErrorMessage from "../form/error-message/error-message";
import { authStart, authError } from "../../redux/user/user-actions";
import {
  selectCurrentUser,
  selectUserLoading,
  selectUserErrors,
} from "../../redux/user/user-selectors";
import { FormContainer, ButtonsContainer } from "../form/form.styles";

const SignUp = ({
  initFormData,
  validateForm,
  currentUser,
  authStartHandler,
  authErrorHandler,
  loading,
  authErrors,
}) => {
  const singUpHandler = async (values) => {
    authStartHandler();
    const { email, password, displayName } = values;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      await creatUserProfileDocument(user, {
        displayName: displayName.value,
      });
    } catch (error) {
      authErrorHandler(error.message);
    }
  };
  const { errors, values, handleSubmit, handleInputChange } = useForm(
    initFormData,
    validateForm,
    singUpHandler
  );

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      handleSubmit();
    }
  };

  return (
    <FormContainer>
      {currentUser ? <Redirect to="/" /> : null}
      <h2>I do not have an account</h2>
      <p>Sign up with your email end password.</p>

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
            handleClick={handleClickSubmit}
          >
            SIGN UP
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
  authStartHandler: () => dispatch(authStart()),
  authErrorHandler: (error) => dispatch(authError(error)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
