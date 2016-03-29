import * as ActionTypes from '../actions/ActionTypes';

export default function user(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload;

      // Will have to create a user tune reducer at some point
      // Need to move tunes to the top of the state object
    case ActionTypes.TUNE_UPDATE:
      return {
        ...state,
        tunes: state.tunes.map(tune => {
          if (tune.id === action.id) {
            return {
              ...tune,
              ...action.payload,
            }
          }

          return tune;
        }),
      };

   //  case ActionTypes.NOTE_UPDATE:
   //    return {
   //      ...state,
   //      tunes: {
   //        ...state.tunes,
   //        notes: state.tunes.notes.map(note => {
   //          if (note.id === action.payload.id) {
   //            return {
   //              ...note,
   //              ...action.payload,
   //            }
   //          }
   //        }),
   //      }
   //    }

    default:
      return state;
  }
}
