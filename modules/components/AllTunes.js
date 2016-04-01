import React from 'react';
import Title from 'react-title-component'
import TuneTable from './TuneTable';

export default React.createClass({
  propTypes: {
    tunes: React.PropTypes.array.isRequired,
  },

  render() {
    const { tunes } = this.props;

    return (
      <div>
        <Title render={prev => `${prev} | All Tunes`}/>
	<h2>All Tunes ({tunes.length})</h2>
	<TuneTable tunes={tunes} />
      </div>
    )
  }
})
