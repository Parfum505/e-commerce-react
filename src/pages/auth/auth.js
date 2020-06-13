import React, { useState } from "react";
import "./auth.scss";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import FormButton from "../../components/form-button/form-button";
import { signInFormInitData, signUpFormInitData } from "../../data/data";
import { validateForm } from "../../utility/utility";

const Auth = () => {
  const [showSingUp, setShowSingUp] = useState(false);
  const switchModeHandler = (event) => {
    event.preventDefault();
    setShowSingUp(!showSingUp);
  };
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
      </FormButton>
      {showSingUp ? (
        <SignUp initFormData={signUpFormInitData} validateForm={validateForm} />
      ) : (
        <SignIn initFormData={signInFormInitData} validateForm={validateForm} />
      )}
    </div>
  );
};

export default Auth;
