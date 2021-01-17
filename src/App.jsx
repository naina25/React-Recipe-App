import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Component/Recipe";
require("dotenv").config();

const App = () => {
  const AppId = process.env.REACT_APP_APP_ID;
  const AppKey = process.env.REACT_APP_APP_KEY;

  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };

  useEffect(() => {
    const getRecipes = async () => {
      if (query !== "") {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`
        );
        const data = await response.json();
        setRecipes(data.hits);
      }
    };
    getRecipes();
  }, [query, AppId, AppKey]);

  return (
    <div className="App">
      <form className="search-form">
        <input
          onChange={handleChange}
          className="search-bar"
          type="text"
          value={input}
        />
        <button onClick={handleClick} className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            imageUrl={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
