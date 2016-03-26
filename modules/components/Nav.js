import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';

const Nav = React.createClass({
  propTypes: {
    tunesCount: React.PropTypes.number.isRequired,
    userTunesCount: React.PropTypes.number.isRequired,
  },

  render() {
    const { userTunesCount, tunesCount } = this.props;

    return (
      <nav>
	<IndexLink to="/">My Tunes ({userTunesCount})</IndexLink>{' '}
	<Link to="/tunes">All Tunes ({tunesCount})</Link>
      </nav>
    );
  }
});

const mapStateToProps = state => ({
  tunesCount: state.user.tunes.length,
  userTunesCount: state.user.tunes.filter(tune => tune.isUserTune).length,
});

export default connect(mapStateToProps)(Nav);
