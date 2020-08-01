import React, { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";

function App() {
  const [userQuery, setUserQuery] = useState("");

  const updateUserQuery = (event) => {
    console.log("userQuery", userQuery);
    setUserQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://www.google.com/search?q=${userQuery}`, "_blank");
  };

  return (
    <div className="App">
      <h1>Hello Ada</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
