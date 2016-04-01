import * as ActionTypes from '../actions/ActionTypes';

export default function user(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
	id: action.payload.id,
      };

    default:
      return state;
  }
}
