export const CHECK_LOGIN_STATUS = 'CHECK_LOGIN_STATUS';
export const CHECK_LOGIN_STATUS_SUCCESS = 'CHECK_LOGIN_STATUS_SUCCESS';
export const CHECK_LOGIN_STATUS_ERROR = 'CHECK_LOGIN_STATUS_ERROR';
export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
export const FACEBOOK_LOGIN_ERROR = 'FACEBOOK_LOGIN_ERROR';
export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';

export const facebookLogin = () => ({ type: FACEBOOK_LOGIN });
export const facebookLoginSuccess = data => ({ type: FACEBOOK_LOGIN_SUCCESS, data });
export const facebookLoginError = () => ({ type: FACEBOOK_LOGIN_ERROR });
export const setLoginStatusOk = () => ({ type: CHECK_LOGIN_STATUS_SUCCESS });
export const setLoginStatusError = () => ({ type: CHECK_LOGIN_STATUS_ERROR });
export const getUserData = () => ({type: GET_USER_DATA});
export const getUserDataSuccess = (data) => ({type: GET_USER_DATA_SUCCESS, data});
export const getUserDataError = () => ({type: GET_USER_DATA_ERROR});
