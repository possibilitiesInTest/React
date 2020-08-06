import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  //  const [joke, setJoke] = useState({});

  useEffect(() => {
    // fetch("https://official-joke-api.appspot.com/jokes/random")
    // fetch("http://localhost:3005/jokes/random")
    fetch(url) //asyncrhonous
      .then((response) => response.json())
      .then((json) => {
        // console.log("joke json", json);
        // setJoke(json);
        setResult(json);
      });
  }, []);

  return result;
};
