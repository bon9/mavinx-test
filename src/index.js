import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";

import registrationReducer from "./store/reducers/registrationReducer";
import authReducer from "./store/reducers/authReducer";
import editReducer from "./store/reducers/editReducer";
import { watchRegistration, watchAuth, watchEdit } from "./store/sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  edit: editReducer
});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchRegistration);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchEdit);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
