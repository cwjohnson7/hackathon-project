
import Header from './components/header';
import Bracket from './components/bracket';
import React, {useState,UseEffect} from 'react';
import axios from 'axios';
import { Credentials} from './credentials'

const App = () => {
  const spotify = Credentials();

  console.log("render app")

  const [token, setToken] = useState('');  
  const [albums, setAlbums] = useState(listofAlbumsFromAPI=[]);

  const dummyData = [
    {value: 1, name:'Album 1'},
    {value: 1, name:'Album 2'},
    {value: 1, name:'Album 3'},
    {value: 1, name:'Album 4'},
    {value: 1, name:'Album 5'},
    {value: 1, name:'Album 6'},
    {value: 1, name:'Album 7'},
    {value: 1, name:'Album 8'},
  ];

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {      
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (albumRespone => {
        setAlbums
      })
      .then (genreResponse => {        
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        })
      });
      
    });

  }, [spotify.ClientId, spotify.ClientSecret]); 



  return (
    <div>
      <Header />
      <Bracket/>
      <div></div>
    </div>
  );
};

export default App;
