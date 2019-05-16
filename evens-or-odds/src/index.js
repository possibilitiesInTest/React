import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import "./index.css";

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state, 'action', action);

  if(action.type === 'SET_GAME_STARTED') {
    return {
      gameStarted: action.gameStarted,
      instructionsExpanded: false
    };
  }

  return state;
};

const store = createStore(rootReducer);
console.log("store", store);
console.log('store.getState()', store.getState());

store.subscribe(() => console.log('store.getState()', store.getState()));

const action1 = { gameStarted: true, type: 'SET_GAME_STARTED' };
store.dispatch(action1);

store.dispatch({ type: 'foo'});
store.dispatch({ type: 'bar' });

ReactDom.render(<App />, document.getElementById("root"));
