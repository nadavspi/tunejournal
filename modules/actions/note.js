import * as ActionTypes from './ActionTypes';
import * as TunesActions from './tunes';
import moment from 'moment';

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
