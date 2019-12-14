import { combineReducers } from 'redux';
import userData from './user';
import albums from './albums';
export default combineReducers({
  userData,
  albums
});
