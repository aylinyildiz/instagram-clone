import { combineReducers } from "redux";
import { photosReducer } from "./photosReducer";
import { commentsReducer } from "./commentsReducer";

const rootReducer = combineReducers({
  photosReducer,
  commentsReducer
});

export default rootReducer;
