import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "./reducers";

const initialState = {
  data: [],
  loading: true,
  isLoggedIn: false,
};

const middleware = [thunk];

const store = createStore(
  allReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
