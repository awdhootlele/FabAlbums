import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_ERROR,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
} from '../actions';

const initialState = {
  albums: null,
  isLoggedIn: false,
  profile: null
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case FACEBOOK_LOGIN_ERROR:
      return { ...state, isLoggedIn: false };
    case GET_USER_DATA_SUCCESS:
      return { ...state, albums: action.data };
    case GET_USER_DATA_ERROR:
      return { ...state, albums: null };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, profile: action.data };
    case GET_USER_PROFILE_ERROR:
      return { ...state, profile: null };
    default:
      return { ...state };
  }
}
