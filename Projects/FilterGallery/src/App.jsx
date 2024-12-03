import "./App.css";
import Menu from "./Compo/Menu";
import Category from "./Compo/Category";
import items from "./Compo/data";
import { useState } from "react";

const allCategory = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState(allCategory);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category == category);
    setMenuItems(newItem);
  };

  return (
    <>
      <div className="menu section">
        <div className="title">
          <h2>Our Filter Menu</h2>
          <div className="underline"></div>
        </div>
        <Category category={category} filterItem={filterItem} />
        <Menu items={menuItems}/>
        <button></button>
      </div>
    </>
  );
};

export default App;
