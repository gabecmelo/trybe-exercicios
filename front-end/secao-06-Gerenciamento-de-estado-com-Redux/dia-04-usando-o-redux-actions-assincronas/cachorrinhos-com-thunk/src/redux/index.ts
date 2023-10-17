import { applyMiddleware, legacy_createStore as createStore } from "redux";
import dogReducer from "./reducer/dogReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
