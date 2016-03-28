import React from 'react';
import Notes from './Notes'
import SelectLists from '../SelectLists';
import relativeDate from 'relative-date';
import { Link } from 'react-router';
import { addPractice } from '../../actions/tunes';
import { connect } from 'react-redux';
import { latestDate } from '../../utils';

const Tune = React.createClass({
  propTypes: {
    routeParams: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
    })
  },

  handlePractice(tune) {
    this.props.dispatch(addPractice(tune));
  },

  render() {
    const { id: tuneId } = this.props.routeParams;
    const tune = this.props.user.tunes.filter(tune => tune.id == tuneId)[0];
    const date = latestDate(tune.practiceDates);

    return (
      <article>
        <h2>{tune.name}</h2>
        <Link to={`/tune/${tuneId}/edit`}>(Edit)</Link>
        <h3>
          {[tune.composer, tune.year].filter(Boolean).join('; ')}
        </h3>
        {date && <h4>Last Practiced: {date}</h4>}

        <button
          onClick={this.handlePractice.bind(null, tune)}
          type="button"
        >
          Mark practice
        </button>

        <SelectLists tune={tune} />

        <Notes notes={tune.notes} />
      </article>
    );
  }
});

export default connect()(Tune);
