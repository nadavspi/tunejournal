import React from 'react';
import Select from 'react-select';
import styles from './styles.css';

export default React.createClass({
  propTypes: {
    label: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    tunes: React.PropTypes.array.isRequired,
  },

  render() {
    const { onChange, tunes, label } = this.props;
    return (
      <div className={this.props.className || styles.container}>
        {label && <h4 className={styles.heading}>{label}</h4>}
        <Select
          labelKey="name"
          onChange={onChange}
          options={tunes}
          className={styles.select}
          valueKey="id"
	  placeholder={this.props.placeholder}
        />
      </div>
    );
  }
});
