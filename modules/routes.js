import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { ServerRoute } from 'react-project'
import hello from './api/hello'
import App from './components/App'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import AllTunes from './components/AllTunes'
import Tune from './components/Tune'
import EditTune from './components/EditTune'
import List from './components/List'
import RandomTune from './components/RandomTune';

export default (
  <Route>
    <Route path="/" component={App}>
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
