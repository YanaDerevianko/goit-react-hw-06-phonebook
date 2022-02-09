import { ContactsForm } from "../ContactsForm/ContactsForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Container } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

export function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  };

  const visibleContacts = getVisibleContacts();
  console.log(visibleContacts);

  const deleteContact = (id) => dispatch(contactsActions.deleteContact(id));

  return (
    <Container>
      <ContactsForm />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter />}
      {contacts.length ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>There are no contacts here</p>
      )}
    </Container>
  );
}
