import React from "react";
import {render} from "react-dom";
import {routes} from "./routes";
import {Router, browserHistory} from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/base.css";
import "./styles/numerology.css";

import rootReducer from "./reducers";

window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  const store = createStore(rootReducer, initialState);
  render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.querySelector(".js-content")
  );
};
