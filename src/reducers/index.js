import { combineReducers } from "redux";
import BracketReducer from "./reducer-bracket";

const rootReducer = combineReducers({
  Bracket: BracketReducer,
})

export default rootReducer;