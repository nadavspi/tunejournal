import React from 'react'
import { createServer } from 'react-project/server'
import { RouterContext } from 'react-router'
import Document from '../modules/components/Document'
import routes from '../modules/routes'
import configureStore from './configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

function getApp(req, res, requestCallback) {
  // here is your chance to do things like get an auth token and generate
  // your route config w/ request aware `onEnter` hooks, etc.
  requestCallback(null, {
    routes: routes,
    render(routerProps, renderCallback) {
      // here is your chance to load up data before rendering and pass it to
      // your top-level components
      renderCallback(null, {
        renderDocument: (props) => <Document {...props}/>,
        renderApp: (props) => (
	  <Provider store={store}>
            <RouterContext {...props}/>
	  </Provider>
        )
      })
    }
  })
}

createServer(getApp).start()
