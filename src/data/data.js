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
