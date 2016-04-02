import '../modules/styles.css'
import AllTunes from './components/AllTunes'
import App from './components/App'
import EditTune from './components/EditTune'
import Home from './components/Home'
import List from './components/List'
import NoMatch from './components/NoMatch'
import RandomTune from './components/RandomTune';
import React from 'react'
import Tune from './components/Tune'
import hello from './api/hello'
import { Route, IndexRoute, Redirect } from 'react-router'
import { ServerRoute } from 'react-project'
import { authAndFetch } from './utils';

export default (
  <Route>
    <Route path="/" component={App} onEnter={authAndFetch}>
      <IndexRoute component={Home}/>
      <Route path="tunes" component={AllTunes}/>
      <Route path="tune/random" component={RandomTune} />
      <Route path="tune/:id" component={Tune} />
      <Route path="tune/:id/edit" component={EditTune} />
      <Route path="list/:id" component={List} />
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path=":hello" get={hello}/>
    </ServerRoute>
    <Redirect from="/not-dragon" to="/dragon"/>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
