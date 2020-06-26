import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { AuthPageContainer, Label } from "./auth.styles";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import FormButton from "../../components/form/form-button/form-button";
import { signInFormInitData, signUpFormInitData } from "../../data/data";
import { validateForm } from "../../utility/utility";

const Auth = () => {
  const [showSingUp, setShowSingUp] = useState(false);
  const switchModeHandler = (event) => {
    event.preventDefault();
    setShowSingUp(!showSingUp);
  };
  const transitionProps = {
    timeout: 300,
    classNames: "display",
    exit: false,
    unmountOnExit: true,
  };

  return (
    <AuthPageContainer>
      <FormButton handleClick={switchModeHandler}>
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

export default Auth;
