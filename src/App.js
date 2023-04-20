
import Header from './components/header';
import Bracket from './components/bracket';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Credentials} from './credentials'
import Search from './components/search';

const App = () => { 
  return (
    <div>
      <Header />
      <Search/>
    </div>
  );
};

export default App;
