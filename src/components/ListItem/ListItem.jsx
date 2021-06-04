import React, { Component } from 'react';
import './ListItem.css';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  render() {
    const user = this.props.user;
    return (
      <a
        className="list__wrapper"
        href={`https://github.com/${user.login}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={user.avatar_url} alt="avatar" className="item__avatar" />
        <p>{user.login}</p>
      </a>
    );
  }
}

ListItem.propTypes = {
  user: PropTypes.object,
};
