import React from "react";
import shortid from 'shortid'

import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';


export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }


  deleteTodo = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== todoId),
    }))}

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }


  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.changeFilter}
          />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteTodo}
            />
        </div>
      </>
    );
  };
}
