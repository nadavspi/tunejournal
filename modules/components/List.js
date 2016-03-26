import React from 'react';
import Title from 'react-title-component'
import TuneTable from './TuneTable';

export default React.createClass({
  propTypes: {
    routeParams: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
    })
  },

  render() {
    const { id: listId } = this.props.routeParams;
    const { lists, tunes: allTunes } = this.props.user;
    const list = lists.filter(list => list.id == listId)[0];
    const tunes = allTunes.filter(tune => {
      return tune.lists.indexOf(listId) > -1;
    });

    return (
      <div>
        <Title render={prev => `${prev} | ${list.name}`}/>
	<h2>{list.name} ({tunes.length})</h2>
	<TuneTable tunes={tunes} />
      </div>
    )
  }
})
