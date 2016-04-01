import React from 'react';
import { addTuneToList } from '../actions/tunes';
import { connect } from 'react-redux';
import Title from 'react-title-component'
import TuneTable from './TuneTable';
import SelectTune from './SelectTune';

const List = React.createClass({
  propTypes: {
    routeParams: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
    }),
    tunes: React.PropTypes.array.isRequired,
    lists: React.PropTypes.array.isRequired,
  },

  handleAdd({ id: tuneId }) {
    const { id: listId } = this.props.routeParams;
    const { tunes } = this.props;
    const tune = tunes.filter(tune => tune.id == tuneId)[0];

    this.props.dispatch(addTuneToList(tune, listId));
  },

  render() {
    if (!this.props.user) {
      return null;
    }

    const { id: listId } = this.props.routeParams;
    const { lists, tunes: allTunes } = this.props;
    const list = lists.filter(list => list.id == listId)[0];
    const tunes = allTunes.filter(tune => {
      return tune.lists.indexOf(listId) > -1;
    });

    // Tunes not in this list
    const otherTunes = allTunes.filter(tune => {
      return tune.lists.indexOf(listId) === -1;
    });

    return (
      <div>
        <Title render={prev => `${prev} | ${list.name}`}/>
	<h2>{list.name} ({tunes.length})</h2>
	<SelectTune
	  label="Add a tune"
	  onChange={this.handleAdd}
	  tunes={otherTunes}
	/>
	<TuneTable tunes={tunes} />
      </div>
    )
  }
});

export default connect()(List);
