import { useState } from "react";
import "./App.css";
import Data from "../Components/Data";
import List from "../Components/List";
function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <div><h1>{people.length} Students</h1></div>
      <List people={people} />

      {/* Clear All values Using Empty Array ([]) */}
      <button onClick={() => setPeople([])}>Clear All</button>
    </>
  );
}

export default App;
