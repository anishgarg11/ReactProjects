import React, { useState } from "react";

function Xyz() {
  const [data, setData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setData({ ...data, name: e.target.value });
    } else {
      setData({ ...data, email: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (data.name === "" || data.email === "") {
      alert("fill");
    }
    setData({ name: "", email: "", number: "" });
  };

  const handleNum = (e) => {
    if (e.target.value.length <= 10) {
      setData({ ...data, number: e.target.value });
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          placeholder="Enter Phone number"
          value={data.number}
          min="0"
          max="10"
          onChange={handleNum}
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Xyz;
