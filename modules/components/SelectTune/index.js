import React from 'react';
import Select from 'react-select';
import styles from './styles.css';

export default React.createClass({
  propTypes: {
    includeRandom: React.PropTypes.bool,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    tunes: React.PropTypes.array.isRequired,
  },

  renderOption(option) {
    if (option.id === 'random') {
      return <span className={styles.random}>Surprise Me!</span>;
    }

    return option.name;
  },

  render() {
    const { includeRandom, onChange, tunes, label } = this.props;
    const random = { id: 'random' };
    const options = includeRandom ? [random, ...tunes] : tunes;

    return (
      <div className={this.props.className || styles.container}>
        {label && <h4 className={styles.heading}>{label}</h4>}
        <Select
          optionRenderer={includeRandom ? this.renderOption : undefined}
          placeholder={this.props.placeholder}
          className={styles.select}
          labelKey="name"
          onChange={onChange}
          options={options}
          valueKey="id"
        />
      </div>
    );
  }
});
