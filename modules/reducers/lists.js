import * as ActionTypes from '../actions/ActionTypes';

export default function lists(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_SUCCESS:
      return action.payload.user.lists;

    default:
      return state;
  }
}
