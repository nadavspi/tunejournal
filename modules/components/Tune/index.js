import * as NoteActions from '../../actions/note';
import Notes from './Notes'
import React from 'react';
import SelectLists from '../SelectLists';
import relativeDate from 'relative-date';
import sortBy from 'sort-by';
import { Link } from 'react-router';
import { addPractice } from '../../actions/tunes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { lastDate } from '../../utils';

const Tune = React.createClass({
  propTypes: {
    routeParams: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
    })
  },

  handlePractice() {
    const { id: tuneId } = this.props.routeParams;

    this.props.dispatch(NoteActions.addNote({
      content: '',
      tuneId,
    }));
  },

  render() {
    // check this with onEnter?
    if (!this.props.user.tunes) {
      return null;
    }

    const { id: tuneId } = this.props.routeParams;
    const tune = this.props.user.tunes.filter(tune => tune.id == tuneId)[0];
    const date = lastDate(tune);
    const noteActionCreators = bindActionCreators(NoteActions, this.props.dispatch);

    return (
      <article>
        <h2>{tune.name}</h2>
        <Link to={`/tune/${tuneId}/edit`}>(Edit)</Link>
        <h3>
          {[tune.composer, tune.year].filter(Boolean).join('; ')}
        </h3>
        {date != null && <h4>Last Practiced: {date}</h4>}

        <SelectLists tune={tune} />

        <button
          onClick={this.handlePractice}
          type="button"
	  style={{ marginTop: '2em' }}
        >
          Mark practice
        </button>

        <Notes
	  notes={tune.notes.sort(sortBy('-createdDate'))}
	  tuneId={tuneId}
	  {...noteActionCreators}
	/>
      </article>
    );
  }
});

export default connect()(Tune);
