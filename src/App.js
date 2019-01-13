import React, { Component } from 'react';
import Login from './Login';
import NavBar from './NavBar';
import N64Logo from './Content/N64Logo.svg';
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
        <div id="imageBox">
          <img src={N64Logo} />
        </div>
        <Login logins={this.state.login}/>
        <NavBar />
        <MainPageIcon />
      </div>
    );
  }
}

export default App;
