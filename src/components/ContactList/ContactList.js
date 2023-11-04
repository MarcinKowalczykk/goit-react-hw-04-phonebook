import { Btn, Contacts, ContactsItem, Name, Number } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <Contacts>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Btn type="button" onClick={() => deleteContact(id)}>
                Delete
              </Btn>
            </ContactsItem>
          );
        })}
      </Contacts>
    </>
  );
};