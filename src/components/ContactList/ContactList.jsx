import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { UlContacts } from './ContactList.styled';

const ContactList = ({ visibleContacts, onDeleteContact }) => (
  <UlContacts>
    {visibleContacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact(id)}
      />
    ))}
  </UlContacts>
);

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
