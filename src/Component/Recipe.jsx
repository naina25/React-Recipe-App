import React from "react";

const Recipe = ({ title, calories, imageUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default Recipe;
