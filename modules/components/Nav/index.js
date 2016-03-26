import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import { link } from './styles.css';

const Nav = React.createClass({
  propTypes: {
    tunesCount: React.PropTypes.number.isRequired,
  },

  render() {
    const { lists, tunesCount } = this.props;

    return (
      <nav>
        <IndexLink to="/" className={link}>Dashboard</IndexLink>{' '}
        {lists.map(list => (
	   <Link
	     key={list.id}
	     to={`/list/${list.id}`}
	     className={link}
	   >
	     {list.name}
	   </Link>
        ))}
        <Link to="/tunes" className={link}>All Tunes</Link>
      </nav>
    );
  }
});

const mapStateToProps = state => ({
  lists: state.user.lists,
  tunesCount: state.user.tunes.length,
});

export default connect(mapStateToProps)(Nav);
