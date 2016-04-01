import React, { cloneElement } from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import Login from './Login';
import Nav from './Nav';

const App = React.createClass({
  propTypes: {
    appState: React.PropTypes.shape({
      user: React.PropTypes.object.isRequired,
      tunes: React.PropTypes.array.isRequired,
      lists: React.PropTypes.array.isRequired,
    }).isRequired,
  },

  login(payload) {
    this.props.dispatch(userActions.login(payload));
  },

  render() {
    const { user, tunes, lists } = this.props;

    return (
      <div>
        <Title render="TuneBook"/>
        {this.props.appState.user.id ? (
           <Nav />
         ) : (
           <Login handleLogin={this.login} />
         )}

           {cloneElement(this.props.children, this.props.appState)}
      </div>
    )
  }
});

const mapStateToProps = state => ({
  appState: {
    ...state,
  }
});

export default connect(mapStateToProps)(App);
