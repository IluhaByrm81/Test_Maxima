import { combineReducers } from "redux";
import { mainPageReducer } from "./mainpage/reducers";

export default combineReducers({
  mainpage: mainPageReducer,
});
