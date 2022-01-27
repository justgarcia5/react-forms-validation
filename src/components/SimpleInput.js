import useInput from '../hooks/use-input';

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredAge,
    isValid: enteredAgeIsValid,
    hasError: ageInputHasError,
    reset: resetAgeInput,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (enteredNameIsValid && enteredAgeIsValid) {
    formIsValid = true;
  }

  const enteredNameSubmitHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName, enteredAge);
    resetNameInput();
    resetAgeInput();
  }

  const setInputClass = (inputValidation) => {
    return inputValidation ? "form-control invalid" : "form-control";
  };

  return (
    <form onSubmit={enteredNameSubmitHandler}>
      <div className={setInputClass(nameInputHasError)}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Age must not be empty.</p>}
      </div>
      <div className={setInputClass(ageInputHasError)}>
        <label htmlFor='name'>Your Age</label>
        <input
          type='text'
          id='age'
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          value={enteredAge}
        />
        {ageInputHasError && <p className='error-text'>Age must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
