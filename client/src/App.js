import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, navigate, Link, Redirect} from '@reach/router';

import AllAuthors from './views/AllAuthors';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors path='/' />
        <NewAuthor path='new' />
        <EditAuthor path='edit/:id' />
      </Router>
    </div>
  );
}

export default App;
