import * as ActionTypes from '../actions/ActionTypes';

export default function tunes(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload.tunes;

    case ActionTypes.TUNE_UPDATE:
      return state.map(tune => {
        if (tune.id === action.id) {
          return {
            ...tune,
            ...action.payload,
          }
        }

        return tune;
      });

    case ActionTypes.NOTE_ADD:
      return state.map(tune => {
        if (tune.id === action.payload.tuneId) {
          return {
            ...tune,
            notes: [
              ...tune.notes,
              action.payload
            ],
          };
        }

        return tune;
      });

    case ActionTypes.NOTE_DELETE:
      return state.map(tune => {
        if (tune.id === action.payload.tuneId) {
          return {
            ...tune,
            notes: tune.notes.filter(note =>
              note.id !== action.payload.id
            ),
          };
        }

        return tune;
      });

    default:
      return state;
  }
}
