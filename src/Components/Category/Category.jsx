import React from "react";
import categoryfullinfos  from "./categoryFullinfos"; // Ensure the file name matches
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <div className={classes.categoryContainer}>
      {categoryfullinfos .map((info) => (
        <CategoryCard key={info.name} data={info} />
      ))}
    </div>
  );
}

export default Category;
