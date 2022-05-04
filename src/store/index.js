import { createStore, combineReducers, applyMiddleware } from "redux";
import { wordReducer } from "./wordReducer";
import { meaningReducer } from "./meaningReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  meaning: meaningReducer,
  word: wordReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
