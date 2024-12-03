import React, { useState } from "react";

function AddContacts({ addContact }) {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };

  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("Please Fill All the Details");
      return;
    }
    addContact(contactData);
    setContactData({ name: "", email: "" });
  };

  return (
    <div className="formHeader">
      <div className="add-contact">AddContacts</div>
      <form>
        <label>Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
      </form>
      <br />
      <button className="btn" onClick={handleAdd}>
        Add Contacts
      </button>
    </div>
  );
}

export default AddContacts;
