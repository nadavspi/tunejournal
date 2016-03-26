import React from 'react'
import { createServer } from 'react-project/server'
import { RouterContext } from 'react-router'
import Document from '../modules/components/Document'
import routes from '../modules/routes'
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import * as userActions from './actions/user';

const store = configureStore();

function getApp(req, res, requestCallback) {
  // here is your chance to do things like get an auth token and generate
  // your route config w/ request aware `onEnter` hooks, etc.
  store.dispatch(userActions.login({ userId: 'me@nadav.name' }));

  setTimeout(() => {
    requestCallback(null, {
      routes: routes,
      render(routerProps, renderCallback) {
        // here is your chance to load up data before rendering and pass it to
        // your top-level components
        renderCallback(null, {
          renderDocument: (props) => <Document initialState={store.getState()} {...props} />,
          renderApp: (props) => (
            <Provider store={store}>
              <RouterContext {...props}/>
            </Provider>
          )
        })
      }
    })
  }, 100);
}

createServer(getApp).start()
