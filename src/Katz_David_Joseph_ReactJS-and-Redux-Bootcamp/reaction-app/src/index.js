import React from "react";
import ReactDom from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from "./components/App";
import "./index.css";

const store = createStore(rootReducer);

console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store.getState()', store.getState()));


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root")
);
