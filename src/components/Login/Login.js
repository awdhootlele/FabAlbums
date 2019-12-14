import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import facebookAPI from '../../api/facebook';
import './Login.scss';
import { facebookLoginSuccess, facebookLoginError } from '../../actions';

class Login extends React.Component {
  logIn = () => {
    facebookAPI.login(response => {
      console.log('Login response', response);
      
      if (response.status === 'connected') {
        this.props.facebookLoginSuccess();
      } else {
        this.props.facebookLoginError();
      }
    });
  };
  render() {
    return (
      <div id='logreg-forms'>
        <form className='form-signin'>
          <h1 className='h3 mb-3 font-weight-normal text-center'> Sign in</h1>
          <div className='social-login d-flex justify-content-between'>
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

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  facebookLoginSuccess,
  facebookLoginError
})(Login);
