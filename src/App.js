import React, { Component } from 'react';
import Login from './Login';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  state = {
    login: [
      {name: "Brother", id: 1},
      {name: "47", id: 2},
      {name: "Buddy", id: 3}
    ]
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
