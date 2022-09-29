import todoReducers from "./todoReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  todoReducers,
});

export default rootReducers;
