import React, { Component } from "react";

class jokes extends Component {
  state = { joke: {} };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(json => console.log("json", json));
    // console.log("response", response)
  }

  render() {
    return <div />;
  }
}

export default jokes;
