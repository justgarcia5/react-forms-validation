import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue)
  const hasError = isTouched && !valueIsValid

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value)
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredValue('');
  }

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }

};

export default useInput;