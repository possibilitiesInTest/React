import React, { useEffect, useState } from "react";

function Joke() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    // fetch("https://official-joke-api.appspot.com/jokes/random")
    fetch("http://localhost:3005/jokes/random")
      .then((response) => response.json())
      .then((json) => {
        console.log("joke json", json);
        setJoke(json);
      });
  }, []);
  // adding empty array
  // useEffect hook only fires once after mount
  // useEffect is similar to cDidMount and cDidUpdate

  const { setup, punchline } = joke;

  return (
    <div>
      <h3>Joke On componentDidMount: Render</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
}

export default Joke;
