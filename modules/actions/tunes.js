import * as ActionTypes from './ActionTypes';
import moment from 'moment';
import { api } from './constants';

export const updateTuneById = (id, payload) => (dispatch, getState) => {
  if (!id || !payload) {
    throw new Error('Missing arguments.');
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

export const addTuneToList = (tune, listId) => (dispatch) => {
  dispatch(updateTuneById(tune.id, {
    // maybe the reducer should do this
    lists: [...tune.lists, listId],
  }));
};

export const addPractice = (tune, date = moment()) => (dispatch) => {
  dispatch(updateTuneById(tune.id, {
    practiceDates: [...tune.practiceDates, date.toISOString()],
  }));
};
