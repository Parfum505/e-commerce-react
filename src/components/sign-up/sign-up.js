import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import "./sign-up.scss";
import useForm from "../../hooks/useForm";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import { authContext } from "../../App";
import { auth, creatUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = ({ initFormData, validateForm }) => {
  const { currentUser, loading, setLoading } = useContext(authContext);

  const singUpHandler = async (values) => {
    setLoading(true);
    const { email, password, displayName } = values;
    console.log(email.value, displayName.value);
    try {
      const [user] = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      console.log(user, displayName);
      await creatUserProfileDocument(user, {
        displayName: displayName.value,
      });
      console.log("Sign up successful");
    } catch (error) {
      console.log(error, error.message);
      setErrors({ formError: error });
    } finally {
      setLoading(false);
    }
  };
  const {
    errors,
    values,
    setErrors,
    handleSubmit,
    handleInputChange,
  } = useForm(initFormData, validateForm, singUpHandler);

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      handleSubmit();
    }
  };

  return (
    <div className="sign-up sign-form">
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
        <div className="buttons">
          <FormButton
            type="submit"
            disabled={loading}
            handleClick={handleClickSubmit}
          >
            SIGN UP
          </FormButton>
        </div>
      </form>
      {errors.formError ? <p>{errors.formError.message}</p> : null}
    </div>
  );
};

export default SignUp;
