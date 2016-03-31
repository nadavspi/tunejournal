import * as ActionTypes from './ActionTypes';
import * as TunesActions from './tunes';
import moment from 'moment';
import uuid from 'uuid';

export const updateNote = (payload) => (dispatch, getState) => {
  let { modifiedDate } = payload;
  if (!modifiedDate) {
    modifiedDate = moment();
  }

  const { tunes } = getState().user;
  const tune = tunes.filter(tune => tune.id == payload.tuneId)[0];
  const nextNote = note => ({
    ...note,
    ...payload,
    modifiedDate: modifiedDate.toISOString(),
  });

  const notes = tune.notes.map(note => {
    return note.id === payload.id ? nextNote(note) : note;
  });

  dispatch(TunesActions.updateTuneById(payload.tuneId, { notes }));
};

export const addNote = (payload) => (dispatch, getState) => {
  if (!payload.tuneId) {
    throw new Error('Missing tuneId');
  }

  let { createdDate } = payload;
  if (!createdDate) {
    createdDate = moment();
  }

  const date = createdDate.toISOString();

  dispatch({
    type: ActionTypes.NOTE_ADD,
    payload: {
      ...payload,
      id: uuid.v1(),
      createdDate: date,
      modifiedDate: date,
    }
  });
};

export const deleteNote = (payload) => ({
  type: ActionTypes.NOTE_DELETE,
  payload,
});
