import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, imageUrl, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={imageUrl} alt="" />
      <p>Calories: {calories}</p>
      <h3>Ingredients: </h3>
      <ul style={{ listStyleType: "none" }}>
        {ingredients.map((ingredient, index) => {
          return <li key={index}> {ingredient.text} </li>;
        })}
      </ul>
    </div>
  );
};

export default Recipe;
