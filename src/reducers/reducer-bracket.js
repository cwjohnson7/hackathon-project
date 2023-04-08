import { FETCH_ALBUMS } from "../actions";
import { CHOOSE_WINNER } from "../actions";

const DEFAULT_STATE = {
  brackets: [{
    round1A: ['Tommy','Billy'],
    round1B: ['Bob','Andy'],
    round1C: ['William','Susan'],
    round1D: ['Tina','Faye']},
    {round2A: ['',''],
    round2B: ['','']},
    {round3: ['','']},
    {winner: ['']}
  ],
}

const BracketReducer = function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return state;

    case CHOOSE_WINNER:
      return action.payload.data;

    default:
      return state;
  }

}

export default BracketReducer;