import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import "./index.css";

const rootReducer = () => {
  return { foo: "bar" };
};

const store = createStore(rootReducer);

console.log("store", store);

ReactDom.render(<App />, document.getElementById("root"));
