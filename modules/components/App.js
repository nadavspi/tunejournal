import React from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'
import { connect } from 'react-redux';

const App = React.createClass({
  render() {
    return (
      <div>
        <Title render="TuneBook"/>
        <h1>woah!</h1>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/dragon">A DRAGON!</Link></li>
          <li><Link to="/not-dragon">An old URL to a DRAGON!</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

export default connect(state => state)(App);
