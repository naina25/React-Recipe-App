import "./App.css";
import React from "react";
require("dotenv").config();

const App = () => {
  const AppId = process.env.REACT_APP_APP_ID;
  const AppKey = process.env.REACT_APP_APP_KEY;

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${AppKey}`;

  console.log(exampleReq);
  return (
    <div>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
