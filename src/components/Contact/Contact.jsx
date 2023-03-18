import { useDispatch } from 'react-redux';
import { ContactBtn } from './Contact.styled';
import { deleteContacts } from 'redux/operations';
export const Contact = ({ contact}) => {
  const dispatch = useDispatch();
  const onDeleteContactsItem =() => {
    dispatch(deleteContacts(contact.id));
  };
  return (
    <>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <ContactBtn type="button" onClick={onDeleteContactsItem}>
        Delete
      </ContactBtn>
    </>
  );
};
