import axios from "axios";
export const CHOOSE_WINNER = "CHOOSE_WINNER";
export const FETCH_ALBUMS = "FETCH_ALBUMS";

const apikey= process.env

export function fetchAlbums(query) {
  const request = axios.get(`
  http://ws.audioscrobbler.com//2.0/?method=tag.gettopalbums&tag=${query}&limit=8&${apikey}&format=json 
  `);
  
  return{
    type: FETCH_ALBUMS,
    payload: request
  };
}


export function chooseWinner(value) {

  return{
    type: CHOOSE_WINNER,
    payload: value
  }
  //placed in each bracket for the user to click and run, should update state to move the selected album to the next sequential bracket

  //maybe we can use the .key() or some method inside of a conditional, basically like, if(key of selectedAlbum is round1A, then push/set/concat the album to round 2A)
}