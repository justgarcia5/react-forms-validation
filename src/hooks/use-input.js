import { useState } from 'react';

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [IsTouched, setIsTouched] = useState(false);

  const valueIsValid = enteredValue !== '';
  const hasError = IsTouched && !valueIsValid

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
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }

};

export default useInput;