import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_ERROR,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR
} from '../actions';

const initialState = {
  data: null,
  isLoggedIn: false
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case FACEBOOK_LOGIN_ERROR:
      return { ...state, isLoggedIn: false };
    case GET_USER_DATA_SUCCESS:
      return { ...state, data: action.data };
    case GET_USER_DATA_ERROR:
      return { ...state, data: null };
    default:
      return { ...state };
  }
}
