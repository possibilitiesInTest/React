import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import "./index.css";

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}


const rootReducer = () => {
  return DEFAULT_SETTINGS;
};

const store = createStore(rootReducer);

console.log('store.getState()', store.getState());
console.log("store", store);

ReactDom.render(<App />, document.getElementById("root"));
