import { useState, useEffect } from "react";

const useForm = (formInitData = {}, validateForm, submitCallback) => {
  const [values, setValues] = useState(formInitData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsSubmitting(false);
      submitCallback(values);
    }
  }, [errors, isSubmitting, submitCallback, values]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validateForm(values, formInitData));
  };
  const handleInputChange = (event) => {
    event.persist();
    const { value, name } = event.target;
    const newInput = { ...values[name], value };
    setValues((values) => ({ ...values, [name]: { ...newInput } }));
  };
  return {
    errors,
    values,
    setErrors,
    handleSubmit,
    handleInputChange,
  };
};

export default useForm;
