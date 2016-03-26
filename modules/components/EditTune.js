import React from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateTuneById } from '../actions/tunes';

const Input = ({ type = 'text', label, value, onChange, name }) => (
  <div>
    <label htmlFor={name}>Name</label>
    <input
      id={name}
      type={type}
      value={value}
      onChange={e => onChange({ [name]: e.target.value })}
    />
  </div>
);

const EditTune = React.createClass({
  propTypes: {
    routeParams: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
    })
  },

  getInitialState() {
    const { id } = this.props.routeParams;

    return this.props.user.tunes.filter(tune => tune.id == id)[0];
  },

  goBack() {
    browserHistory.push(`/tune/${this.state.id}`);
  },

  handleChange(payload) {
    this.setState({ ...this.state, ...payload });
  },

  handleSubmit(e) {
    e.preventDefault();

    this.props.dispatch(updateTuneById(this.state.id, this.state));
    this.goBack();
  },

  render() {
    return (
      <article>
        <h2>{this.state.name}</h2>
        <Link to={`/tune/${this.state.id}`}>(View)</Link>

        <form onSubmit={this.handleSubmit}>
	  <Input
	    label="Name"
	    name="name"
	    onChange={this.handleChange}
	    value={this.state.name}
	  />

	  <Input
	    label="Composer(s)"
	    name="composer"
	    onChange={this.handleChange}
	    value={this.state.composer}
	  />

	  <Input
	    label="Year"
	    name="year"
	    onChange={this.handleChange}
	    type="number"
	    value={this.state.year}
	  />

	  <button type="submit">Save</button>
	  <button type="button" onClick={this.goBack}>Cancel</button>
        </form>
      </article>
    );
  }
});

export default connect()(EditTune);
