import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { ContactItem } from './ContactList.styled';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);
  const filterName = () => {
    const normalizedFiltr = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.includes(normalizedFiltr));
  };
  return (
    <ul>
      {filterName().map(contact => (
        <ContactItem key={contact.id}>
          <Contact contact={contact} />
        </ContactItem>
      ))}
    </ul>
  );
};
