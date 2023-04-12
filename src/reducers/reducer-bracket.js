import { FETCH_ALBUMS } from "../actions";
import { CHOOSE_WINNER } from "../actions";

const DEFAULT_STATE = {
  brackets: [
    {round1A: ['Tommy','Billy']},
    {round1B: ['Bob','Andy']},
    {round1C: ['William','Susan']},
    {round1D: ['Tina','Faye']},
    {round2A: []},
    {round2B: []},
    {round3: []},
    {winner: []}
  ],
}

const BracketReducer = function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return state;

    case CHOOSE_WINNER:
      // console.log(state.brackets[4].round2A);
      console.log(action.payload);
      // return state.brackets[4].round2A.concat(action.payload);
      return state

    default:
      return state;
  }

}

export default BracketReducer;