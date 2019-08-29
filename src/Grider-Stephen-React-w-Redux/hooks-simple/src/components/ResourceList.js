import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);

  // useEffect gets called every time component gets rendered

  // async componentDidUpdate(prevProps) {
  //   if (prevProps.resource !== this.props.resource) {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${this.props.resource}`
  //     );
  //     this.setState({ resources: response.data });
  //   }
  // }

  return (
    <div>
      {resources.map(record => (
        <li key={record.id}></li>
      ))}
    </div>
  );
};

export default ResourceList;
