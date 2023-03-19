import React from 'react';
import { useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { ContactItem, ContactBtn } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
export const ContactList = () => {
  const filter = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContactsItem = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul>
      {filter.map(({ name, phone, id }) => (
        <ContactItem key={id}>
          <p>
            {name}: {phone}
          </p>
          <ContactBtn type="button" onClick={() => onDeleteContactsItem(id)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
