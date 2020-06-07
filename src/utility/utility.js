export const checkMinLength = (expression, length) =>
  expression && expression.trim().length >= length;

export const checkIsfilled = (expression) =>
  expression && expression.length > 0;

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
    }
  }
  return errors;
};