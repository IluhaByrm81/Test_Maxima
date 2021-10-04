import { combineReducers } from "redux";
import { mainPageReducer as setview } from "./mainpage/reducer";
import { mainPageReducer as setModalOne } from "./mainpage/reducer";
import { mainPageReducer as setModalTwo } from "./mainpage/reducer";
import { modalOneReducer as clickAlert } from "./modal/reducer";

export const reducers = combineReducers({
  setview,
  setModalOne,
  setModalTwo,
  clickAlert,
});
