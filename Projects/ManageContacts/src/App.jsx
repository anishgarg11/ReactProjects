import React, { useEffect, useState } from "react";
import Header from "./Compo/Header";
import AddContacts from "./Compo/AddContacts";
import ContactList from "./Compo/ContactList";
import uuid4 from "uuid4";
import Xyz from "./Compo/Xyz";
function App() {
  const localStorageKey = "contact";

  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };
  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };
  return (
    <div>
      <Header />
      <AddContacts addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
      <Xyz></Xyz>
    </div>
  );
}

export default App;
