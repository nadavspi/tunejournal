import React from 'react';
import { connect } from 'react-redux';
import { updateTuneById } from '../actions/tunes';

const AddRemove = React.createClass({
  propTypes: {
    tune: React.PropTypes.object.isRequired,
  },

  handleClick() {
    const { dispatch, tune } = this.props;

    dispatch(updateTuneById(tune.id, {
      isUserTune: !tune.isUserTune,
    }))
  },

  render() {
    const { tune } = this.props;

    return (
      <button
	onClick={this.handleClick}
	type="button"
      >
	{tune.isUserTune ? 'Remove' : 'Add'}
      </button>
    );
  }
});

export default connect()(AddRemove);
