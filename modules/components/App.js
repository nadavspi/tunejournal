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

  componentDidMount() {
    const { auth_token, email } = window.localStorage;

    if (auth_token && email) {
      this.props.dispatch(
	userActions.loginSuccess({ auth_token, email }),
      );
    }
  },

  componentDidReceiveProps() {
    console.log('receive props')
  },

  render() {
    const { user, tunes, lists } = this.props;

    return (
      <div>
        <Title render="TuneBook"/>
        {this.props.appState.user.auth_token ? (
           <div>
             <Nav />
             {cloneElement(this.props.children, this.props.appState)}
           </div>
         ) : (
           <Login handleLogin={this.login} />
         )}
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
