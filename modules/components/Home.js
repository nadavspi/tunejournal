import React from 'react'
import Title from 'react-title-component'
import TuneTable from './TuneTable';

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Dashboard`}/>
	<h2>Dashboard</h2>
      </div>
    )
  }
})
