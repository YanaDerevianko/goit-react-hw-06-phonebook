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
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts.length > 0) {
      dispatch(contactsActions.addContact(parsedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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
