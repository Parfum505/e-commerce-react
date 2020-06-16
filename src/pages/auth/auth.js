import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import "./auth.scss";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import FormButton from "../../components/form/form-button/form-button";
import { signInFormInitData, signUpFormInitData } from "../../data/data";
import { validateForm } from "../../utility/utility";
import fadeHOC from "../../hoc/cssTransition";

const Auth = () => {
  const [showSingUp, setShowSingUp] = useState(false);
  const switchModeHandler = (event) => {
    event.preventDefault();
    setShowSingUp(!showSingUp);
  };
  const transitionProps = {
    timeout: 300,
    appear: false,
    exit: true,
    classNames: "display",
    unmountOnExit: true,
  };
  const SignUpWithTransition = fadeHOC({
    ...transitionProps,
    in: showSingUp,
    key: 1,
  })(SignUp);
  const SignInWithTransition = fadeHOC({
    ...transitionProps,
    in: !showSingUp,
    key: 2,
  })(SignIn);
  return (
    <div className="pages auth-page">
      <FormButton
        handleClick={switchModeHandler}
        classes={["switch-signin-signup-button"]}
      >
        {showSingUp ? (
          <div>
            <span className="dissabled">SING&nbsp;IN</span>
            &nbsp;/&nbsp;SING&nbsp;UP
          </div>
        ) : (
          <div>
            SING&nbsp;IN&nbsp;/&nbsp;
            <span className="dissabled">SING&nbsp;UP</span>
          </div>
        )}
        {}
      </FormButton>
      <TransitionGroup component={null}>
        <SignUpWithTransition
          initFormData={signUpFormInitData}
          validateForm={validateForm}
        />
        <SignInWithTransition
          initFormData={signInFormInitData}
          validateForm={validateForm}
        />
      </TransitionGroup>
    </div>
  );
};

export default Auth;
