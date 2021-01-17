import React from "react";

const Recipe = ({ title, calories, imageUrl, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul style={{ listStyleType: "none" }}>
        {ingredients.map((ingredient, index) => {
          return <li key={index}> {ingredient.text} </li>;
        })}
      </ul>
      <img src={imageUrl} alt="" />
      <p>Calories: {calories}</p>
    </div>
  );
};

export default Recipe;
