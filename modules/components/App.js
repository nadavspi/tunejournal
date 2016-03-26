import React, { cloneElement } from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import Login from './Login';
import Nav from './Nav';

const App = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  login(payload) {
    this.props.dispatch(userActions.login(payload));
  },

  render() {
    const { user } = this.props;

    return (
      <div>
        <Title render="TuneBook"/>
	{this.props.user.id ? (
	  <Nav />
	) : (
	   <Login handleLogin={this.login} />
	)}

        {cloneElement(this.props.children, { user })}
      </div>
    )
  }
});

export default connect(state => state)(App);
