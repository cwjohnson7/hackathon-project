import axios from "axios";
export const CHOOSE_WINNER = "CHOOSE_WINNER";
export const FETCH_ALBUMS = "FETCH_ALBUMS";

const apikey= process.env

export function fetchAlbums(query) {
  const request = axios.get(`
  http://ws.audioscrobbler.com//2.0/?method=tag.gettopalbums&tag=${query}&limit=8&e677d23af436ef4d60bbf2e8a28d9962&format=json 
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
}