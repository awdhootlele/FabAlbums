import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import './Login.scss';
export default class Login extends React.Component {
  logIn = event => {
    console.log('Clicked', event);
    if (window.FB) {
      const { FB } = window;
      FB.login(function(response) {
        console.log('RES', response);
        
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.', response);
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  };
  render() {
    return (
      <div id='logreg-forms'>
        <form className='form-signin'>
          <h1 className='h3 mb-3 font-weight-normal text-center'> Sign in</h1>
          <div className='social-login'>
            <button className='btn facebook-btn social-btn' type='button' onClick={this.logIn}>
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
                {' Sign in with Facebook'}
              </span>{' '}
            </button>
            <button className='btn google-btn social-btn' type='button'>
              <span>
                <FontAwesomeIcon icon={faGooglePlusG} /> {' Sign in with Google+'}
              </span>{' '}
            </button>
          </div>
          <p className='text-center'> OR </p>
          <input
            type='email'
            id='inputEmail'
            className='form-control'
            placeholder='Email address'
            required=''
            autofocus=''
          />
          <input
            type='password'
            id='inputPassword'
            className='form-control'
            placeholder='Password'
            required=''
          />

          <button className='btn btn-success btn-block' type='submit'>
            <i className='fas fa-sign-in-alt'></i> Sign in
          </button>
          <a href='#' id='forgot_pswd'>
            Forgot password?
          </a>
          <hr />
          <button className='btn btn-primary btn-block' type='button' id='btn-signup'>
            <i className='fas fa-user-plus'></i> Sign up New Account
          </button>
        </form>
        <br />
      </div>
    );
  }
}
