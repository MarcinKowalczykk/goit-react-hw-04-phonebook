import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Subtitle, Container } from '../App.styled';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-2', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const dataNumbers = localStorage.getItem(LS_KEY);

    if (dataNumbers) {
      setContacts(JSON.parse(dataNumbers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handlerSubmit = (data) => {
    if (contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts([data, ...contacts]);
    }
  };

  const onFilter = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handlerSubmit} />

      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onFilter={onFilter} />
      <ContactList deleteContact={deleteContact} contacts={filteredContacts} />
    </Container>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default App;
