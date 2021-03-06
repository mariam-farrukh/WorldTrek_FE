import React from 'react';
import {Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Game from './components/game/game.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/game" component={Game} />
    </div>
  );
}

export default App;
