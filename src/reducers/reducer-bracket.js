import { FETCH_ALBUMS } from "../actions";
import { CHOOSE_WINNER } from "../actions";

const DEFAULT_STATE = {
  brackets: [

  ],
}

const BracketReducer = function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      // console.log(action.payload.data.albums.album)
      return {
        brackets: [action.payload.data.albums.album]
      };

    case CHOOSE_WINNER:
      // console.log(state.brackets[4].round2A);
      // console.log(action.payload);
      // return state.brackets[4].round2A.concat(action.payload);
      return state

    default:
      return state;
  }

}

export default BracketReducer;