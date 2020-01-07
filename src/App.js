import React from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
