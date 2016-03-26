import * as ActionTypes from '../actions/ActionTypes';

export default function user(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload;

    default:
      return state;
  }
}
