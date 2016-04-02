import React from 'react';

export default React.createClass({
  propTypes: {
    handleLogin: React.PropTypes.func.isRequired,
  },

  getInitialState () {
    return {
      email: '',
      password: '',
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
	  <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={e => this.setState({ email: e.target.value })}
            required
            type="email"
            value={this.state.email}
          />
	  <label htmlFor="password">Password</label>
          <input
            id="password"
            onChange={e => this.setState({ password: e.target.value })}
            required
            type="password"
            value={this.state.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
});
