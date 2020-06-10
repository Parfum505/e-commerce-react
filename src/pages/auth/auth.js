import React from "react";
import "./auth.scss";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import { signInFormInitData, signUpFormInitData } from "../../data/data";
import { validateForm } from "../../utility/utility";

const Auth = () => {
  return (
    <div className="pages">
      <SignIn initFormData={signInFormInitData} validateForm={validateForm} />
      <SignUp initFormData={signUpFormInitData} validateForm={validateForm} />
    </div>
  );
};

export default Auth;
