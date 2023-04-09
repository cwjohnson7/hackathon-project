import { combineReducers } from "redux";
import BracketReducer from "./reducer-bracket";

const rootReducer = combineReducers({
  bracket: BracketReducer,
})

export default rootReducer;