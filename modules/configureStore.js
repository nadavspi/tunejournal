import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, promiseMiddleware)
);

export default configureStore;
