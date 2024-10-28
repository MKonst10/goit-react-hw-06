import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import initialContacts from "./contacts.json";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const addContact = (newContactData) => {
    const newContact = {
      ...newContactData,
      id: nanoid(),
    };
    const action = {
      type: "items/addContact",
      payload: newContact,
    };
    dispatch(action);
  };
  const deleteContact = (contactData) => {
    const action = {
      type: "items/deleteContact",
      payload: contactData,
    };
    dispatch(action);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
