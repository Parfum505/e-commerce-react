export const signInFormInitData = {
  email: {
    type: "email",
    label: "Email",
    validation: {
      required: true,
      isEmail: true,
    },
    value: "",
  },
  password: {
    type: "password",
    label: "Password",
    validation: {
      required: true,
      minLength: 6,
    },
    value: "",
  },
};
export const signUpFormInitData = {
  displayName: {
    type: "text",
    label: "Display Name",
    validation: {
      required: true,
    },
    value: "",
  },
  email: {
    type: "email",
    label: "Email",
    validation: {
      required: true,
      isEmail: true,
    },
    value: "",
  },
  password: {
    type: "password",
    label: "Password",
    validation: {
      required: true,
      minLength: 6,
    },
    value: "",
  },
  confirmPassword: {
    type: "password",
    label: "Confirm Password",
    validation: {
      required: true,
      confirmPassword: true,
    },
    value: "",
  },
};
