import staticMethods from 'antd/es/message';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAlbums } from "../actions";

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAlbums(query))
    setQuery('');
    
  }


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
    </div>

  
  )
}

export default Search