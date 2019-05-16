import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import "./index.css";

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state, 'action', action);

  switch (action.type) {
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.gameStarted };
      //   gameStarted: action.gameStarted,
      //   instructionsExpanded: state.instructionsExpanded
      // };
    case SET_INSTRUCTIONS_EXPANDED:
      return { ...state, instructionsExpanded: action.instructionsExpanded };
        // gameStarted: state.gameStarted,
        // instructionsExpanded: action.instructionsExpanded
      // };
    default:
      return state;
  }
};

// create store with reducer
const store = createStore(rootReducer);
console.log("store", store);
console.log('store.getState()', store.getState());

// log state whenever store is changed
store.subscribe(() => console.log('store.getState()', store.getState()));


// action creators
const startGame = () => {
 return { type: SET_GAME_STARTED, gameStarted: true };
}

const cancelGame = () => {
 return { type: SET_GAME_STARTED, gameStarted: false };
}

const expandInstructions =() => {
  return {  type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true};
}

const cancelInstructions =() => {
  return {  type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false};
}

// const action1 = startGame();
// store.dispatch(action1);

store.dispatch(startGame());
store.dispatch(expandInstructions());
store.dispatch(cancelInstructions());
store.dispatch(cancelGame());

ReactDom.render(<App />, document.getElementById("root"));
