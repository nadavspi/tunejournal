import * as ActionTypes from './ActionTypes';
import { api } from './constants';
import { checkStatus, parseJSON } from '../utils';

export const login = ({ email, password }) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.LOGIN_REQUEST,
    payload: { email },
  });

  const params = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: { email, password }
    })
  };

  fetch(`${api}/sessions`, params)
    .then(checkStatus)
    .then(parseJSON)
    .then(payload => {
      persistLogin(payload);
      dispatch(loginSuccess(payload));
    })
    .catch(e => console.error(e));
};

const persistLogin = (payload) => {
  try {
    window.localStorage.auth_token = payload.auth_token;
    window.localStorage.email = payload.email;
  } catch (e) {
    console.log('local storage', e);
  }
};

export const loginSuccess = (payload) => (dispatch, getState) => {
  dispatch({
    payload,
    type: ActionTypes.LOGIN_SUCCESS,
  });

  dispatch(fetchData());
};

const fetchData = () => (dispatch, getState) => {
  const { auth_token, email } = getState().user;

  dispatch({
    type: ActionTypes.FETCH_DATA,
  });

  const params = {
    method: 'GET',
    headers: {
      'X-User-Email': email,
      'X-Auth-Token': auth_token,
    }
  };

  fetch(`${api}/current-user`, params)
    .then(checkStatus)
    .then(parseJSON)
    .then(payload => dispatch(fetchDataSuccess(payload)))
    .catch(e => dispatch(fetchDataFail(e)));
};

const fetchDataSuccess = (payload) => ({
  payload,
  type: ActionTypes.FETCH_DATA_SUCCESS
});

const fetchDataFail = (error) => {
  console.error(error);
};
