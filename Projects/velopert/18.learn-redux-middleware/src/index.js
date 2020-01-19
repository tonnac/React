import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { createLogger } from "redux-logger";
// import loggerMiddleware from "./lib/loggerMiddleware";
import ReduxThunk from "redux-thunk";
import createSageMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const sageMiddleware = createSageMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk, sageMiddleware))
);

sageMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
