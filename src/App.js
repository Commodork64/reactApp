import React, { Component } from 'react';
import './App.css';
import User from './User.js';
import Game from './Game.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleUserNameChange(event) {
    this.setState({userNameInput: event.target.value})

  }

  handlePassWordChange(event) {
    this.setState({passwordInput: event.target.value})
  }

  handleSubmit() {
    // send both input to the backend
    console.log("submitted");
  }
  
  render() {
    return (
      <div className="App">
        <div id="left"></div>
        <div id="right"></div>
        <div id="top"></div>
        <div id="bottom"></div>
        <h1 id="title">Sixty-Four List</h1>

        <form onSubmit={this.handleSubmit} id="parent">
          <input type="text" name="userNameInput" id="usernameForm" value={this.state.userNameInput} onChange={this.handleUserNameChange.bind(this)}></input>
          <input type="text" name="userPassWord" id="passwordForm"value={this.state.passwordInput} onChange={this.handlePassWordChange.bind(this)}></input>
        </form>
        <User />
        <Game />
      </div>    
    );
  }
}

export default App;