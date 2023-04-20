import axios from "axios";
export const CLEAR_BRACKET = "CLEAR_BRACKET";
export const FETCH_ALBUMS = "FETCH_ALBUMS";

const apikey= process.env.REACT_APP_API_KEY;

export function fetchAlbums(query) {
  const request = axios.get(`
  http://ws.audioscrobbler.com//2.0/?method=tag.gettopalbums&tag=${query}&limit=8&api_key=${apikey}&format=json 
  `);
  
  return{
    type: FETCH_ALBUMS,
    payload: request
  };
}


export function clearBracket(array) {

  return{
    type: CLEAR_BRACKET
  }
}