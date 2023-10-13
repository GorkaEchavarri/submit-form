import React from 'react';
import classes from './Form.module.css';

function Form() {
  return (
    <form className={classes.form} >
    <div>
      <p>
        <label htmlFor='name'>Name</label>
        <br></br>
        <input type="text" id="name" />
      </p>
      <p>
        <label htmlFor='address'>Email Address</label>
        <br></br>
        <input type="email" id="address" />
      </p>
      <p>
        <label htmlFor='phone'>Phone Number</label>
        <br></br>
        <input type="text" id="phone" />
      </p>
    </div>
    <p>
      <button type="submit" className="button">Add User</button>
    </p>
    </form>
  )
};

export default Form;
