import React, { useState } from "react";
import "./auth.scss";
import SignIn from "../../components/sign-in/sign-in";

const signInInitData = {
  email: {
    type: "email",
    name: "email",
    value: "",
    label: "Email",
    valid: true,
  },
  password: {
    type: "password",
    name: "password",
    value: "",
    label: "Password",
    isValid: true,
  },
};

const Auth = () => {
  const [signInForm, setSignInForm] = useState(signInInitData);
  // useEffect(() => {
  //   setSignIn(signInData);
  // }, []);

  return (
    <div className="pages">
      <SignIn
        initFormData={signInInitData}
        formData={signInForm}
        setFormData={setSignInForm}
      />
    </div>
  );
};

export default Auth;
