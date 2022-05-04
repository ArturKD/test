import {
  addMeaningAction,
  errorMeaningAction,
  loadingMeaningAction,
} from "../store/meaningReducer";

export const fetchWords = (path) => {
  return function (dispatch) {
    dispatch(loadingMeaningAction());
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${path}`)
      .then((response) => response.json())
      .then((json) => dispatch(addMeaningAction(json)))
      .catch((error) => {
        console.log(error);
        dispatch(errorMeaningAction(error));
      });
  };
};
//
