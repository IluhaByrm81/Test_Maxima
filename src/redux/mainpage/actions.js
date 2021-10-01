export const VIEW_MODAL_ONE = "VIEW_MODAL_ONE";
export const VIEW_MODAL_TWO = "VIEW_MODAL_TWO";

export const HANDLE_CLICK_BUTTON_ONE = "HANDLE_CLICK_BUTTON_ONE";
export const HANDLE_CLICK_BUTTON_TWO = "HANDLE_CLICK_BUTTON_TWO";

export const viewModalOne = () => {
  return {
    type: VIEW_MODAL_ONE,
    payload: true,
  };
};

export const viewModalTwo = () => {
  return {
    type: VIEW_MODAL_TWO,
    payload: true,
  };
};

export const openModalOne = () => {
  return {
    type: HANDLE_CLICK_BUTTON_ONE,
    payload:true
  };
};

export const openModalTwo = () => {
  return {
    type: HANDLE_CLICK_BUTTON_TWO,
    payload: true
  };
};
