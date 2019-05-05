import React, { Component } from "react";

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log("regularClassInstance", regularClassInstance);
// console.log("componentClassInstance", componentClassInstance);

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };

    console.log("Component this", this);

    //   this.readMore = () => {
    //     console.log("readMore this", this);
    //   };
    // }

    this.readMore = this.readMore.bind(this);
  }

  readMore() {
    console.log("readMore this", this);

    // this.setState({ displayBio: true });
    // this.state.displayBio = true;
  }

  render() {
    const bio = this.state.displayBio ? (
      <div>
        <p>I live in San Francisco, and code every day.</p>
        <p>
          My favorite language is JavaScript, and I think React.js is awesome.
        </p>
        <p>Besides coding, I also love ramen and music.</p>
      </div>
    ) : (
      <div>
        <button onClick={this.readMore}>Read more</button>
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
