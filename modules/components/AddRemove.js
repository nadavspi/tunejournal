import React from 'react';
import { connect } from 'react-redux';
import { updateTuneById } from '../actions/tunes';
import Select from 'react-select';

const AddRemove = React.createClass({
  propTypes: {
    lists: React.PropTypes.array.isRequired,
    tune: React.PropTypes.object.isRequired,
  },

  handleClick() {
    const { dispatch, tune } = this.props;

    dispatch(updateTuneById(tune.id, {
      isUserTune: !tune.isUserTune,
    }))
  },

  handleChange(newValue, selectedOptions) {
    console.log(newValue, selectedOptions);
  },

  render() {
    const { lists, tune } = this.props;
    const options = lists.map(list => ({
      label: list.name,
      value: list.id,
    }));

    return (
      <Select
	onChange={this.handleChange}
	multi={true}
	value={tune.lists.join(',')}
        options={options}
      />
    );
  }
});

const mapStateToProps = state => ({
  lists: state.user.lists,
});

export default connect(mapStateToProps)(AddRemove);
