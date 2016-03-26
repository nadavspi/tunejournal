import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from '../modules/routes'
import configureStore from './configureStore';
import { Provider } from 'react-redux';
require('babel-polyfill');

const { INITIAL_STATE: initialState } = window;

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)
