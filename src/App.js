import React, { Component } from 'react';
import Login from './Login';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
