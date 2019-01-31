import React, { Component } from 'react';
import './Home.css';
import N64Logo from './Content/N64Logo.svg';
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
                        <input className="inputBox" id="createInput1" type="text" onChange={this.handleNameChange}></input>
                    </div>
                    <div className="createFormGroup">
                        <label>Date of Birth</label>
                        <input className="inputBox" id="createInput2" type="text" onChange={this.handleBirthDateChange}></input>
                    </div>
                    <div className="createFormGroup">
                        <label>Password</label>
                        <input className="inputBox" id="createInput3" type="password" onChange={this.handlePasswordChange}></input>
                    </div>
                    <div className="createFormGroup">
                        <label>ID</label>
                        <input className="inputBox" type="text" onChange={this.handleIDChange}></input>
                    </div>
                    <div className="createFormGroup">
                        <button onClick={this.createThisUser}>Create User</button>
                        <button onClick={this.updateThisUser}>Update User</button>
                    </div>
                </section>

                <section className="imgContainer">
                    <img src={N64Logo}></img>
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
        this.state.userDataToSend.userName = event.target.value;
    }

    handleBirthDateChange = event => {
        this.state.userDataToSend.dateOfBirth = event.target.value;
    }

    handlePasswordChange = event => {
        this.state.userDataToSend.password = event.target.value;
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
        axios.post('http://localhost:8080/SoloProjectCalin/api/user/addUser/',  {
                userName: this.state.userName,
                dateOfBirth: this.state.dateOfBirth,
                password: this.state.password
            })
            .then(function(response) {
                console.log(response);
            })
        }

    updateThisUser = event => {
        axios({
            method: 'put',
            url: 'http://localhost:8080/SoloProjectCalin/api/user/updateUser/' + this.state.userid,
            data: {
                userName: this.state.userName,
                dateOfBirth: this.state.dateOfBirth,
                password: this.state.password
            }
        })
    }

}

export default Home;