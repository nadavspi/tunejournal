import * as ActionTypes from '../actions/ActionTypes';

export default function lists(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload.lists;

    default:
      return state;
  }
}
