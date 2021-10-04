export const modalOneActionType = {
  SET_BUTTON_ONE: "SET_BUTTON_ONE",
//   SET_BUTTON_TWO: "SET_BUTTON_TWO",
};

export const modalOneActions = {
   clickAlert: (payload) => ({
    type: modalOneActionType.SET_BUTTON_ONE,
    payload,
  }),
//   clickClose: (payload) => ({
//     type: modalOneActionType.SET_BUTTON_TWO,
//     payload,
//   }),
};
