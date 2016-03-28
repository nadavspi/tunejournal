import React from 'react'
import Title from 'react-title-component'
import TuneTable from './TuneTable';

export default React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },

  render() {
    const { tunes } = this.props.user;
    const userTunes = tunes.filter(tune => tune.isUserTune);

    return (
      <div>
        <Title render={prev => `${prev} | Dashboard`}/>
	<h2>Dashboard</h2>
      </div>
    )
  }
})
