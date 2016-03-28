import React from 'react';
import { connect } from 'react-redux';
import { randomTune } from '../actions/tunes';

const RandomTune = React.createClass({
  componentDidMount() {
    this.random();
  },

  componentWillReceiveProps() {
    this.random();
  },

  random() {
    this.props.dispatch(randomTune());
  },

  render() {
    return (
      <h1>Loading&hellip;</h1>
    );
  }
});

export default connect()(RandomTune);
