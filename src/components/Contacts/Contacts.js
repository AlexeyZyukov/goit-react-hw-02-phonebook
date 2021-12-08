import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const { onFilter, onDelete } = this.props;
    return (
      <ul className="contactList">
        {onFilter.map(({ id, name, number }) => {
          return (
            <li className="contactListItem" key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button className="button" onClick={() => onDelete(id)} id={id}>
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contacts;
