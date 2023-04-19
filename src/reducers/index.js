import { combineReducers } from "redux";
import BracketReducer from "./reducer-bracket";
import AlbumReducer from "./albumreducer";

const rootReducer = combineReducers({
  bracket: BracketReducer, AlbumReducer,
})

export default rootReducer;