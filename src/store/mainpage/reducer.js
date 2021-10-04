import { mainPageActionType } from "./actions";

const initialState = {
  setview: true,
  setModalOne: false,
  setModalTwo: false,
};

export const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case mainPageActionType.SET_VIEW:
      return { ...state, setview: action.payload };
    case mainPageActionType.SET_MODAL_ONE:
      return { ...state, setModalOne: action.payload };
    case mainPageActionType.SET_MODAL_TWO:
      return { ...state, setModalTwo: action.payload };
    default:
      return state;
  }
};
