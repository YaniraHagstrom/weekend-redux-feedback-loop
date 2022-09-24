import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Import Components
import Feelings from '../Feelings/Feelings';
import Header from '../Header/Header';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <Header /> 
      <Router>
        <Route exact path='/'>
          <Feelings />
        </Route>
        <Route exact path='/understanding'>
          <Understanding />
        </Route>
      </Router>
    </div>
  );
}

export default App;
