import React from "react";
import backgroundImage from "../../images/login.jpg";
import styles from "./Login.module.scss";

function Login() {
  return (
    <main>
      <div
        className={styles["bgimg-1"]}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <br />
        <div
          style={{ backgroundColor: "white" }}
          className='form'
        >
          <div className='tab-content'>
            <div id='signup'>
              <h1>Log In</h1>
              <p>If you do not have an account, you can sign up here too.</p>
              <form
                action='/'
                method='post'
              >
                <div className='field-wrap'>
                  <label htmlFor='username' />
                  <input
                    placeholder='Email Address'
                    type='email'
                    required
                    autoComplete='off'
                  />
                </div>
                <div className='field-wrap'>
                  <label htmlFor='password' />
                  <input
                    placeholder='Password'
                    type='password'
                    required
                    autoComplete='off'
                  />
                </div>
                <button
                  type='submit'
                  className='button button-block'
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
