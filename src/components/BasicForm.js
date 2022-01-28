import useBasicInput from "../hooks/use-basic-input";

const notEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useBasicInput(notEmpty);

  const {
    value: lastNameValue,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useBasicInput(notEmpty);

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useBasicInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = e => {
    e.preventDefault();

    console.log(firstNameValue, lastNameValue, emailValue)

    if (!formIsValid) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const setInputClasses = inputError => {
    return inputError ? 'form-control invalid' : 'form-control'
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={setInputClasses(firstNameHasError)}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && <p className='error-text'>Please enter a first name.</p>}
        </div>
        <div className={setInputClasses(lastNameHasError)}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && <p className='error-text'>Please enter a last name.</p>}
        </div>
      </div>
      <div className={setInputClasses(emailHasError)}>
        <label htmlFor='name'>E-mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && <p className='error-text'>Please enter a valid e-mail.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
