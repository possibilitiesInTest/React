import React, { Component } from "react";

const TITLES = [
  "a software engineer",
  "a music lover",
  "an enthusiastic leaner",
  "an adventure seeker"
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    // console.log("Title component has mounted");
    this.timeeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

    this.animateTitles();
  }

  componentWillUnmount() {
    // console.log("Title component will unmount!");

    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);

    // console.log("this.titleInterval", this.titleInterval);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;

    const title = TITLES[this.state.titleIndex];

    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </p>
    );
  }
}

export default Title;
