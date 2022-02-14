import propTypes from "prop-types";
import React from "react";
import { ContactsList, ListItem, ButtonDelete } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import contactsActions from "../../redux/contacts/contacts-actions";

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);

    if (parsedContacts.length) {
      for (let i = 0; i < parsedContacts.length; i++) {
        const name = parsedContacts[i].name;
        console.log(name)
        const number = parsedContacts[i].number;
        dispatch(contactsActions.addContact({ name, number }));
      }
    }
  }, []);

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <span>{name}</span>
          <span>{number}</span>
          <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ButtonDelete>
        </ListItem>
      ))}
    </ContactsList>
  );
};
ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};
