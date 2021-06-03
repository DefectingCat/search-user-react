import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Enter Github user name"
          onChange={this.props.getInput}
        ></input>
        <button onClick={this.props.toSearch}>Search</button>
      </div>
    );
  }
}

Input.propTypes = {
  getInput: PropTypes.func,
  toSearch: PropTypes.func,
};
