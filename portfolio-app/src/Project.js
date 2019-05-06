import React, { Component } from "react";
import PROJECTS from "./data/project";

class Project extends Component {
  render() {
    console.log("this.props", this.props);

    return <div>{this.props.project.title}</div>;
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {/* { PROJECTS[0].title } */}

          {PROJECTS.map(PROJECT => {
            return (
              <Project key={PROJECT.id} project={PROJECT} />
              /* return <div key={PROJECT.id}>{PROJECT.title}</div>; */
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
