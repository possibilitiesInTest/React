import React from "react";
import { useFetch } from "./hooks";

// adding empty array
// useEffect hook only fires once after mount
// useEffect is similar to cDidMount and cDidUpdate

function Joke() {
  const { setup, punchline } = useFetch(
    "https://official-joke-api.appspot.com/jokes/random",
    {}
  );

  // const { setup, punchline } = joke;

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
