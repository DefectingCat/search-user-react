import React, { Component } from 'react';
import Input from '../Input/Input';
import './Search.css';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    return (
      <div className="search__body">
        <h1>Seach Github Users</h1>
        <Input getInput={this.props.getInput} toSearch={this.props.toSearch} />
      </div>
    );
  }
}

Search.propTypes = {
  getInput: PropTypes.func,
  toSearch: PropTypes.func,
};
