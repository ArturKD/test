const defaultState = {
  word: "",
};

export const wordReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_WORD":
      return { ...state, word: action.payload };
    case "REMOVE_WORD":
      return { ...state, word: "" };
    default:
      return state;
  }
};
