import React, { Component } from 'react';
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import './App.css';
import MainPageIcon from './MainPageIcon';

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
        <Login logins={this.state.login}/>
        <Home />
        <NavBar />
        <MainPageIcon />
      </div>
    );
  }
}

export default App;
