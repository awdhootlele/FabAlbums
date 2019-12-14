// just for login
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
export const FACEBOOK_LOGIN_ERROR = 'FACEBOOK_LOGIN_ERROR';

// For user albums
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';

// for user profile
export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'GET_USER_PROFILE_ERROR';

export const facebookLoginSuccess = data => ({ type: FACEBOOK_LOGIN_SUCCESS, data });
export const facebookLoginError = () => ({ type: FACEBOOK_LOGIN_ERROR });

export const getUserDataSuccess = data => ({ type: GET_USER_DATA_SUCCESS, data });
export const getUserDataError = () => ({ type: GET_USER_DATA_ERROR });

export const getUserProfileSuccess = data => ({ type: GET_USER_PROFILE_SUCCESS, data });
export const getUserProfileError = () => ({ type: GET_USER_PROFILE_ERROR });
