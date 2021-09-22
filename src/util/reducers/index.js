import loggedReducer from "./isLogged";
import apiReducer from "./apiCall";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  loggedReducer: loggedReducer,
  apiReducer: apiReducer,
});

export default allReducer;
