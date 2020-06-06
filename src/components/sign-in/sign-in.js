import React from "react";
import "./sign-in.scss";
import Form from "../form/form";

const SignIn = ({ initFormData, formData, setFormData }) => {
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <p>Sign in with your email end password.</p>
      <Form
        initFormData={initFormData}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default SignIn;
