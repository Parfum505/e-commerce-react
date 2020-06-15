export const checkMinLength = (expression, length) =>
  expression && expression.trim().length >= length;

export const checkIsfilled = (expression) =>
  expression && expression.length > 0;

export const checkConfirmPassword = (confirmPassword, password) =>
  confirmPassword === password;

export const checkEmailPattern = (mail) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(mail);
};

export const validateForm = (values = {}) => {
  let errors = {};
  for (const name in values) {
    const input = values[name],
      inputValidators = input.validation,
      inputVal = input.value,
      inputLabel = input.label;

    if (inputValidators.required && !checkIsfilled(inputVal)) {
      errors[name] = inputLabel + " is required";
    } else if (inputValidators.isEmail && !checkEmailPattern(inputVal)) {
      errors[name] = "Email address is invalid";
    } else if (
      inputValidators.minLength &&
      !checkMinLength(inputVal, inputValidators.minLength)
    ) {
      errors[name] = "Min length is " + inputValidators.minLength + " signes";
    } else if (inputValidators.confirmPassword) {
      const inputPasswordVal = values["password"].value;
      if (!checkConfirmPassword(inputVal, inputPasswordVal)) {
        errors[name] = "Passwords do not match.";
      }
    }
  }
  return errors;
};

export const addItemToCart = (cartItems, itemToAdd) => {
  const cartItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (cartItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
