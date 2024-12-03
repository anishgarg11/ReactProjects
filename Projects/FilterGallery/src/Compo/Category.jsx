import React from "react";

const Category = ({ category, filterItem }) => {
  return (
    <div>
      {category.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItem(category)}
          ></button>
        );
      })}
    </div>
  );
};

export default Category;
