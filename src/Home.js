import React, { Component } from 'react';
import './Home.css';
import N64Logo from './Content/N64Logo.svg';
import MainPageIcon from './MainPageIcon';
import * as axios from 'axios';

class Home extends Component {

    constructor() {

        super();

        this.state = {
            userid: '',
            userDataToSend: [{
                userName: "name",
                dateOfBirth: "date",
                password: "superSecure"
            }],
        }

    }
    render() {
        return (
            <div className="homePageContainer">
                <section className="createContainer">
                    <div className="createFormGroup">
                        <label>Username</label>
                        <input className="inputBox" type="text" onChange={this.handleNameChange}></input>
                    </div>
                    <div className="createFormGroup">
                        <label>Date of Birth</label>
                        <input className="inputBox" type="text" onChange={this.handleBirthDateChange}></input>
                    </div>
                    <div className="createFormGroup">
                        <label>Password</label>
                        <input className="inputBox" type="password" onChange={this.handlePasswordChange}></input>
                    </div>
                    <div className="createFormGroup">
                        <button onClick={this.createThisUser}>Create User</button>
                    </div>
                </section>

                <section className="imgContainer">
                    <img src={N64Logo}></img>
                    {/* <MainPageIcon /> */}
                </section>

                <section className="deleteContainer">
                    <label>deleteUserByID</label>
                    <input className="inputBox" type="text" onChange={this.handleIDChange}></input>
                    <button onClick={this.deleteThisUser}>Delete User</button>
                </section>
            </div>
        );
    }

    handleIDChange = event => {
        this.setState({ userid: event.target.value });
    }

    handleNameChange = event => {
        this.state.userDataToSend[0].userName = event.target.value;
    }

    handleBirthDateChange = event => {
        this.state.userDataToSend[0].dateOfBirth = event.target.value;
    }

    handlePasswordChange = event => {
        this.state.userDataToSend[0].password = event.target.value;
    }

    deleteThisUser = event => {
        event.preventDefault();
        console.warn(this.state);

        axios.delete(`http://localhost:8080/SoloProjectCalin/api/user/removeUser/${this.state.userid}`)
            .then(response => {
                console.log("deleted item.");
            })
    }

    createThisUser = event => {
        axios.post('http://localhost:8080/SoloProjectCalin/api/user/addUser', { user: this.state.userDataToSend })
            .then(response => {
                console.log(response);
            })
    }

}

export default Home;