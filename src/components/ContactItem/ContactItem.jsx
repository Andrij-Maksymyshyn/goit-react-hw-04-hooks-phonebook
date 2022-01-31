import React from 'react';
import PropTypes from 'prop-types';
import { LiContact, ButtonDelete } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <LiContact>
    {name}: {number}
    <ButtonDelete type="button" onClick={onDeleteContact}>
      Delete
    </ButtonDelete>
  </LiContact>
);

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
