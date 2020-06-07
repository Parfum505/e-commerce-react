import React from "react";
import "./auth.scss";
import SignIn from "../../components/sign-in/sign-in";
import { signInFormInitData } from "../../data/data";
import { validateForm } from "../../utility/utility";

const Auth = () => {
  return (
    <div className="pages">
      <SignIn initFormData={signInFormInitData} validateForm={validateForm} />
    </div>
  );
};

export default Auth;
