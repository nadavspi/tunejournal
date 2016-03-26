import * as ActionTypes from './ActionTypes';
import { api } from './constants';

export const login = ({ userId }) => (dispatch, getState) => {
  fetch(`${api}/users/${userId}`)
    .then(resp => resp.json())
    .then(payload => {
      dispatch({ type: ActionTypes.LOGIN, payload })
    });
};
