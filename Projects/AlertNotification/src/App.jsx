import React from "react";
import AlerList from "../Compo/AlerList";
import Alert from "../Compo/Alert";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      {AlerList.map((AlerList, id) => (
        <Alert
          type={AlerList.type}
          title={AlerList.title}
          id={AlerList.id}
        >        {AlerList.message}
</Alert>
      ))}
    </div>
  );
};

export default App;
