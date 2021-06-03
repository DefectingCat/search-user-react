import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
  render() {
    return (
      <div className="list__wrapper">
        <img
          src="https://avatars.githubusercontent.com/u/383316?v=4"
          alt="avatar"
          className="item__avatar"
        />
        <p>test</p>
      </div>
    );
  }
}
