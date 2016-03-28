import React from 'react';
import { browserHistory, IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import { select, nav, link } from './styles.css';
import SelectTune from '../SelectTune';

const Nav = React.createClass({
  propTypes: {
    lists: React.PropTypes.array.isRequired,
    tunes: React.PropTypes.array.isRequired,
  },

  handleChange({ id }) {
    browserHistory.push(`/tune/${id}`);
  },

  render() {
    const { lists, tunes } = this.props;

    return (
      <nav className={nav}>
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
	<SelectTune
	  tunes={tunes}
	  includeRandom={true}
	  onChange={this.handleChange}
	  placeholder="Go to tune"
	  className="override"
	/>
      </nav>
    );
  }
});

const mapStateToProps = state => ({
  lists: state.user.lists,
  tunes: state.user.tunes,
});

export default connect(mapStateToProps)(Nav);
