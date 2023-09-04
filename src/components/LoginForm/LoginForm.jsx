import React from 'react';
import styles from './loginForm.module.css';

function LoginForm() {
  return (
    <div className={`flex-center ${styles.form}`}>
      <div>
        <form className='flex-column' action=''>
          <div>
            <label htmlFor='login'>Login</label>
            <input type='text' id='login' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
