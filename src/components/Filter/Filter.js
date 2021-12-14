import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };
  render() {
    const { filter, onChange } = this.props;
    return (
      <div className="container">
        <p className="filterTitle">Find contacts by name</p>
        <input
          className="formInput"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </div>
    );
  }
}
