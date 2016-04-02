import React from 'react';
import { connect } from 'react-redux';
import { updateTuneById } from '../../actions/tunes';
import Select from 'react-select';
import styles from './styles.global.css';

const AddRemove = React.createClass({
  propTypes: {
    lists: React.PropTypes.array.isRequired,
    tune: React.PropTypes.object.isRequired,
  },

  handleChange(options) {
    const { dispatch, tune } = this.props;

    dispatch(updateTuneById(tune.id, {
      list_ids: options.map(option => option.id),
    }));
  },

  render() {
    const { lists, tune } = this.props;

    return (
      <Select
        clearable={false}
        labelKey="name"
        multi={true}
        onChange={this.handleChange}
        value={tune.list_ids.join(',')}
        valueKey="id"
        options={lists}
        style={{ maxWidth: '300px' }}
      />
    );
  }
});

const mapStateToProps = state => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(AddRemove);
