import { useState, useEffect } from 'react'
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList"
import initialContactLists from "../../contactList.json"
import css from "../App/App.module.css"

export default function App() {
  const [contactLists, setContactList] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContactLists;
  });
  const [filter, setFilter] = useState('');

  const visibleContact = contactLists.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContactList((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

const deleteContact = (contactId) => {
    setContactList((prevContact) =>
      prevContact.filter((contact) => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactLists));
  }, [contactLists]);

  console.log("Visible Contacts: ", visibleContact);

  return (
  <div className={css.container}>
    <h1 className={css.appTitle}>Phonebook</h1>
    <ContactForm onAddContact={addContact}/>
    <SearchBox value={filter} onFilter={setFilter}/>
    <ContactList contactLists={visibleContact} onDelete={deleteContact} />
</div>
  )
}


