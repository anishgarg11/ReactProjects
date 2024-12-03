import React, { useState } from "react";

function App() {
  const [data, setData] = useState({ name: "" });

  function change(e) {
    // setData(e.target.value);
    setData({ ...data, name: e.target.value });
  }

  function handleSubmit() {
    console.log(data);
    return setData({ name: "" });
  }

  return (
    <>
      <input type="text" name="name" value={data.name} onChange={change} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default App;
