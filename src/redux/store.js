// import { dataReducer } from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import {createStore } from "redux";
import rootReducer from "../redux/reducer"

export const store = createStore(rootReducer);
