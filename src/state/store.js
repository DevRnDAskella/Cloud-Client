import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import * as reducers from "./ducks";

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

window.store = store;

export default store;
