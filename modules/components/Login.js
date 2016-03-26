import React from 'react';

export default React.createClass({
  propTypes: {
    handleLogin: React.PropTypes.func.isRequired,
  },

  getInitialState () {
    return {
      userId: 'me@nadav.name',
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
  },

  render() {
    return (
      <div>
	<h2>Login</h2>
	<form onSubmit={this.handleSubmit}>
	  <input
	    type="email"
	    value={this.state.userId}
	    onChange={e => this.setState({ userId: e.target.value })}
	    required
	  />
	  <button type="submit">Login</button>
	</form>
      </div>
    );
  }
});
