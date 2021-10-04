export const mainPageActionType = {
  SET_VIEW: "MAIN_PAGE.SET_VIEW",
  SET_MODAL_ONE: "MAIN_PAGE.SET_MODAL_ONE",
  SET_MODAL_TWO: "MAIN_PAGE.SET_MODAL_TWO",
};

export const mainPageActions = {
  setView: (payload) => ({ type: mainPageActionType.SET_VIEW, payload }),
  setModalOne: (payload) => ({
    type: mainPageActionType.SET_MODAL_ONE,
    payload: payload,
  }),
  setModalTwo: (payload) => ({
    type: mainPageActionType.SET_MODAL_TWO,
    payload: payload,
  }),
};
