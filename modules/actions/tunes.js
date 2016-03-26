import * as ActionTypes from './ActionTypes';
import { api } from './constants';

export const updateTuneById = (id, payload) => (dispatch, getState) => {
  if (!id || !payload) {
    throw new Error('Missing arguments');
  }

  const { tunes } = getState().user;

  if (!tunes.filter(tune => tune.id == id).length) {
    throw new Error('Invalid tune id');
  }

  dispatch({
    type: ActionTypes.TUNE_UPDATE,
    id,
    payload,
  });
};
