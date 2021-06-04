import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';

export default class List extends Component {
  render() {
    const users = this.props.users;
    return (
      <div className="list">
        {users.map((item) => (
          <ListItem user={item} key={item.id} />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  users: PropTypes.array,
};
