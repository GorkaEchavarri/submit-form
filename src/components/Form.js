import React, { useState } from 'react';
import classes from './Form.module.css';

function Form(props) {

  const[enteredName, setEnteredName] = useState('');
  const[enteredEmail, setEnteredEmail] = useState('');
  const[enteredPhone, setEnteredPhone] = useState('');

  function NameSubmitHandler(event) {
    setEnteredName(event.target.value)
  };
  function EmailSubmitHandler(event) {
    setEnteredEmail(event.target.value)
  };
  function PhoneSubmitHandler(event) {
    setEnteredPhone(event.target.value)
  };

  function submitHander(event) {
    event.preventDefault();
    console.log(enteredName)
    console.log(enteredEmail)
    console.log(enteredPhone)
    console.log("Succesfully Submitted!!")
    setEnteredName('')
    setEnteredEmail('')
    setEnteredPhone('')

    props.onFormSubmit();
  };



  return (
    <div>
		<form className={classes['card-form']} onSubmit={submitHander}>
			<div className={classes.input}>
				<input type="text" className={classes["input-field"]} value={enteredName} onChange={NameSubmitHandler} required/>
				<label className={classes["input-label"]}>Full name</label>
			</div>
						<div className={classes.input}>
				<input type="email" className={classes["input-field"]} value={enteredEmail} onChange={EmailSubmitHandler} required/>
				<label className={classes["input-label"]}>Email</label>
			</div>
						<div className={classes.input}>
				<input type="text" className={classes["input-field"]} value={enteredPhone} onChange={PhoneSubmitHandler} required/>
				<label className={classes["input-label"]}>Phone Number</label>
			</div>
			<div className={classes.action}>
				<button className={classes["action-button"]}>Submit info</button>
			</div>
		</form>
    </div>
  )
};

export default Form;
