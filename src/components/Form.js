import React from 'react';
import classes from './Form.module.css';

function Form() {
  return (
    <div>
		<form className={classes['card-form']}>
			<div className={classes.input}>
				<input type="text" className={classes["input-field"]} required/>
				<label className={classes["input-label"]}>Full name</label>
			</div>
						<div className={classes.input}>
				<input type="email" className={classes["input-field"]} required/>
				<label className={classes["input-label"]}>Email</label>
			</div>
						<div className={classes.input}>
				<input type="text" className={classes["input-field"]} required/>
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
