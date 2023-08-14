import React from "react";

const Categories = ({ menu, buttonHandler }) => {
  const categories = menu.map((item) => item.category);
  console.log(categories);

  // new Set() => Set object
  // a collection of "unique" values (所以不會重複)
  const tempSet = new Set(categories);
  console.log(tempSet);

  // (Set) object spread out
  const arr = ["all", ...tempSet];
  // console.log(arr);

  return (
    <div className="btn-container">
      {arr.map((category, index) => {
        return (
          <button
            key={index}
            type=" button"
            className="btn"
            name={category}
            onClick={(e) => buttonHandler(e.target.name)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
