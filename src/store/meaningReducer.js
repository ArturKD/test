const defaultState = {
  meanings: [],
  requestInProgress: false,
  error: null,
};
export const ADD_MEANING = "ADD_MEANING";
export const ERROR_MEANING = "ERROR_MEANING";
export const LOADER_MEANING = "LOADER_MEANING";

export const meaningReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MEANING:
      return {
        ...state,
        meanings: [...action.payload],
        requestInProgress: false,
        error: null,
      };
    case ERROR_MEANING:
      return { ...state, error: action.payload, requestInProgress: false };
    case LOADER_MEANING:
      return { ...state, requestInProgress: true };
    default:
      return state;
  }
};

export const addMeaningAction = (payload) => ({
  type: ADD_MEANING,
  payload,
});
export const errorMeaningAction = (payload) => ({
  type: ERROR_MEANING,
  payload,
});
export const loadingMeaningAction = (payload) => ({
  type: LOADER_MEANING,
  payload,
});
