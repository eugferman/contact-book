import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/firestore";
import config from "./config";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import allReducers from "./redux/reducers";

firebase.initializeApp(config.firebaseConfig);

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
