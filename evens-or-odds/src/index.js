import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from "./components/App";
import rootReducer from './reducers';
import "./index.css";

// create store with reducer
const store = createStore(rootReducer);
console.log("store", store);
console.log('store.getState()', store.getState());

// log state whenever store is changed
store.subscribe(() => console.log('store.getState()', store.getState()));

// store.dispatch(startGame());
// store.dispatch(expandInstructions());
// store.dispatch(cancelInstructions());
// store.dispatch(cancelGame());

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById("root")
);
