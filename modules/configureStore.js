import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk, promiseMiddleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
  ),
);

export default configureStore;
