import propTypes from "prop-types";
import React from "react";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import { AddForm, ContactsInput, ContactsButton } from "./ContactsForm.styled";
import { useEffect } from "react";

export function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts.length > 0) {
  //     dispatch(contactsActions.addContact(parsedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  const handleSubmit = (e, contacts) => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;

    const foundEl = contacts.find(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );

    foundEl
      ? alert(`${name} is already in your contacts!`)
      : dispatch(contactsActions.addContact({ name, number }));

    e.target.name.value = "";
    e.target.number.value = "";
  };

  return (
    <>
      <h1>Phonebook</h1>
      <AddForm onSubmit={(e) => handleSubmit(e, contacts)}>
        <label>
          Name:
          <ContactsInput
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number:
          <ContactsInput
            id={numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <ContactsButton type="submit">Add contact</ContactsButton>
      </AddForm>
    </>
  );
}

ContactsForm.propTypes = {
  onSubmit: propTypes.func,
};

export default ContactsForm;
