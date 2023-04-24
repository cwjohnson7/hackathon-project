import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from "../actions";
import BracketView from './bracket';
import _ from 'lodash';

const Search = () => {
  const contestants = useSelector((state) => state.bracket)
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAlbums(query))
    setQuery('');
    
  }

  if(!_.isEmpty(contestants.brackets)) {
  return(
     <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            name='genre'
            placeholder='Genre'
            value={query} onChange={(e) => setQuery(e.target.value)}
          >
          </input>
          <button 
            type='submit'
            className='btn'
          >Search</button>
        </div>
      </form>
      <BracketView />
    </div>
  )}
  return(
    <div className='container'>
      <div>Enter a music genre!</div>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
         <input
           className='form-control'
           name='genre'
           placeholder='Genre'
           value={query} onChange={(e) => setQuery(e.target.value)}
         >
         </input>
         <button 
           type='submit'
           className='btn'
         >Search</button>
       </div>
     </form>
   </div>

 
 )
}

export default Search