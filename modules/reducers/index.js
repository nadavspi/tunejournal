import lists from './lists';
import tunes from './tunes';
import user from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tunes,
  user,
  lists,
});

export default rootReducer;
