import { combineReducers } from "redux";
import taskReducer from "./taskReducers";

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
