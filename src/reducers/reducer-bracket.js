import { FETCH_ALBUMS } from "../actions";

const DEFAULT_STATE = {
  albums: [],
}

const BracketReducer = function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return state;

      default:
        return state;
  }

}

export default BracketReducer;