import React, { useEffect } from 'react';
import { List, Item, Button, Text } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectFilter, selectLoading } from 'redux/selectors';
import { deleteContactsThunk, getContactsThunk } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';


// Компонент списка контактов
const ContactList = () => {
 
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError)

  useEffect(()=>{
    dispatch(getContactsThunk())},[dispatch])

  const onRemoveContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  
  return (
    <div>
      <List>
      {isLoading && !error ? (
        <Loader />
      ) : contacts.length === 0 && !error ? (
        <Text>The Phonebook is empty. Add your first contact.</Text>
      ) : 
       filteredContacts.length === 0 && !error ? (
        <Text>Not find</Text>
      ):
        (filteredContacts.map(contact => (
          <Item key={contact.id}>
            {contact.name + ' : ' + contact.number}
            {
      
              <Button
                type="button"
                name="delete"
                onClick={() => onRemoveContact(contact.id)}
              >
                delete
              </Button>
            }
          </Item>
        )))}
      </List>
    </div>
  );
};

export default ContactList;
