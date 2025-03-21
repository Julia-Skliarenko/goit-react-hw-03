import { useState, useEffect } from 'react'
import ContactForm from "../../ContactForm/ContactForm";
import SearchBox from "../../SearchBox/SearchBox";
import ContactList from "../../ContactList/ContactList"
import initialContactLists from "./contactList.json"
import css from "./App.module.css"

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContactLists;
  });
  const [filter, setFilter] = useState('');

  

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
  )
}


