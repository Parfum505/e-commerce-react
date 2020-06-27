import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { AuthPageContainer, Label } from "./auth.styles";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import FormButton from "../../components/form/form-button/form-button";
import { signInFormInitData, signUpFormInitData } from "../../data/data";
import { validateForm } from "../../utility/utility";
import { clearAuthError } from "../../redux/user/user-actions";

const Auth = ({ clearAuthErrorHandler }) => {
  const [showSingUp, setShowSingUp] = useState(false);
  const switchModeHandler = (event) => {
    event.preventDefault();
    clearAuthErrorHandler();
    setShowSingUp((prevSingUp) => !prevSingUp);
  };
  const transitionProps = {
    timeout: 300,
    classNames: "display",
    exit: false,
    unmountOnExit: true,
  };

  return (
    <AuthPageContainer>
      <FormButton onClick={switchModeHandler}>
        <Label>
          {showSingUp ? (
            <>
              <span>SING&nbsp;IN</span>
              &nbsp;/&nbsp;SING&nbsp;UP
            </>
          ) : (
            <>
              SING&nbsp;IN&nbsp;/&nbsp;
              <span>SING&nbsp;UP</span>
            </>
          )}
        </Label>
      </FormButton>
      <CSSTransition in={showSingUp} {...transitionProps}>
        <SignUp initFormData={signUpFormInitData} validateForm={validateForm} />
      </CSSTransition>
      <CSSTransition in={!showSingUp} {...transitionProps}>
        <SignIn initFormData={signInFormInitData} validateForm={validateForm} />
      </CSSTransition>
    </AuthPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearAuthErrorHandler: () => dispatch(clearAuthError()),
});
export default connect(null, mapDispatchToProps)(Auth);
