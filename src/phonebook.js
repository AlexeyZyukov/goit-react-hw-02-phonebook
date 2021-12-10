import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './components/styles.module.css';

export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  //===form===
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  //===========App methods===================
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts list!`);
    } else {
      this.setState({
        contacts: [...contacts, { name, number, id: uuidv4() }],
      });
      console.log({ contacts });
    }
  };
  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        console.log('contact =', contact);
        // console.log(contactId)
        // console.log('prevState = ', prevState);
        return contact.id !== contactId;
      }),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const contactId = uuidv4();
    return (
      <div className={styles.wrapper}>
        <Fragment>
          <h1 className="title">Phonebook</h1>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <label className="formLabel">
              <p className={styles.inputName}>Name </p>
              <input
                className={styles.formInput}
                id={contactId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="formLabel">
              <p className={styles.inputName}> Number</p>
              <input
                className={styles.formInput}
                id={contactId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки"
                value={this.state.number}
                onChange={this.handleChange}
                required
              />
            </label>

            <button type="submit" className="button">
              Add contact
            </button>
          </form>
          //====filter====
          <div className="container">
            <p className="filterTitle">Find contacts by name</p>
            <input
              className="formInput"
              type="text"
              name="filter"
              value={this.filter}
              onChange={this.changeFilter}
            />
          </div>
          //============contacts===========
          <ul className={styles.contactList}>
            {this.filterContacts().map(({ id, name, number }) => {
              return (
                <li className={styles.contactListItem} key={id}>
                  <p>{name}</p>
                  <p>{number}</p>
                  <button
                    className="button"
                    onClick={() => this.deleteContact(id)}
                    id={id}
                  >
                    Delete contact
                  </button>
                </li>
              );
            })}
          </ul>
        </Fragment>
      </div>
    );
  }
}
