import React from 'react';
import relativeDate from 'relative-date';
import Notes from './Notes'
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    routeParams: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
    })
  },

  render() {
    const { id: tuneId } = this.props.routeParams;
    const tune = this.props.user.tunes.filter(tune => tune.id == tuneId)[0];

    return (
      <article>
        <h2>{tune.name}</h2>
	<Link to={`/tune/${tuneId}/edit`}>(Edit)</Link>
        <h3>
          {[tune.composer, tune.year].filter(Boolean).join('; ')}
        </h3>
        <h4>Last Practiced: {relativeDate(new Date(tune.datePracticed))}</h4>

	<Notes notes={tune.notes} />
      </article>
    );
  }
});
