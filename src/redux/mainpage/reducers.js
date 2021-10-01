const defaultState = {
  modalOne: false,
  modalTwo: false,
  buttonOne: true,
  buttonTwo: true,
};

export const mainPageReducer = (state = defaultState, action) => {

    console.log(state);
    
  switch (action.type) {
      
    case "VIEW_MODAL_ONE":
      return { ...state, modalOne: action.payload };
    case "VIEW_MODAL_TWO":
      return { ...state, modalTwo: action.payload };

    case "HANDLE_CLICK_BUTTON_ONE":
      return { ...state, modalOne: action.payload };
    case "HANDLE_CLICK_BUTTON_TWO":
      return { ...state, modalTwo: action.payload };
  }

  return state;
};
