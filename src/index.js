import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";

import authReducer from "./store/reducers/auth";
import { watchAuth } from "./store/sagas/index";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(authReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAuth);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
