import React, { Component } from "react";

class App extends Component {
  state = { displayBio: false };

  // constructor() {
  //   super();
  //   this.state = { displayBio: false };
  //   console.log("Component this", this);
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    const bio = this.state.displayBio ? (
      <div>
        <p>I live in San Francisco, and code every day.</p>
        <p>
          My favorite language is JavaScript, and I think React.js is awesome.
        </p>
        <p>Besides coding, I also love ramen and music.</p>
        <button onClick={this.toggleDisplayBio}>Read Less</button>
      </div>
    ) : (
      <div>
        <button onClick={this.toggleDisplayBio}>Read more</button>
      </div>
    );

    // if (!this.state.displayBio) {
    //   bio = null;
    // }

    return (
      <div>
        <h1>Hello!</h1>
        <p>Hi my Name is Charlie. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {bio}
      </div>
    );
  }
}

export default App;
