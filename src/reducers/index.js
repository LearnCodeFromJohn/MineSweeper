import { combineReducers } from "redux";
import mapReducer from "./reducer_map";

const rootReducer = combineReducers({
  theMap: mapReducer
});

export default rootReducer;
