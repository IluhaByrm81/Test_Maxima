import { modalOneActionType } from "./actions";

const initialState = {
  clickAlert: false,
//   clickClose: true,
};

export const modalOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalOneActionType.SET_BUTTON_ONE:
      return { ...state, clickAlert: action.payload };
   //  case modalOneActionType.SET_BUTTON_TWO:
   //    return { ...state, clickClose: action.payload };
    default:
      return state;
  }
};
