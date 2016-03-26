import * as ActionTypes from '../actions/ActionTypes';

export default function user(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload;

      // Will have to create a user tune reducer at some point
    case ActionTypes.TUNE_UPDATE:
      return {
	...state,
	tunes: state.tunes.map(tune => {
	  if (tune.id === action.id) {
	    return {
	      ...tune,
	      ...action.payload,
	    }
	  }

	  return tune;
	}),
      };

    default:
      return state;
  }
}
