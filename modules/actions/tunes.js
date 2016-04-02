import * as ActionTypes from './ActionTypes';
import moment from 'moment';
import { api } from './constants';
import { browserHistory } from 'react-router';

export const updateTuneById = (id, payload) => (dispatch, getState) => {
  if (!id || !payload) {
    throw new Error('Missing arguments.');
  }

  const { tunes } = getState();

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
    list_ids: [...tune.list_ids, listId],
  }));
};

export const addPractice = (tune, date = moment()) => (dispatch) => {
  dispatch(updateTuneById(tune.id, {
    practiceDates: [...tune.practiceDates, date.toISOString()],
  }));
};

export const randomTune = () => (dispatch, getState) => {
  const { tunes } = getState();

  // Need to be smarter about this:
  // - not the current one
  // - maybe sort by least practiced
  const random = tunes[Math.floor(Math.random() * tunes.length)];

  browserHistory.replace(`/tune/${random.id}`);

  dispatch({
    type: ActionTypes.TUNE_RANDOM,
    payload: random.id,
  })
}
