import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component {

    constructor() {

        super();

        this.state = {
            users: [],
            username: "",
            password: ""
        }}

        updateUsername = (event) => {
            this.setState({ username: event.target.value });
        }
        updatePassword = (event) => {
            this.setState({ password: event.target.value });
        }

        setUser = () => {
            axios({
                method: 'get',
                url: 'http://localhost:8080/SoloProjectCalin/api/user/getAllUsers',
            })
            .then(response => {
                this.setState({
                    users: response.data
                });
                    let password = this.state.password;
                    let username = this.state.username;
                    this.state.users.forEach(function(user) {
                        if (username === user.userName) {
                            sessionStorage.setItem("username", username);
                            sessionStorage.setItem("password", password);
                            window.location.reload();
                        }
                    })
            })
        }
    render() {

        return (
            <div className="homePageContainer">

            <form>
                <label>username</label>
                <input type="text" onChange={this.updateUsername}></input>
                <label>password</label>
                <input type="password" onChange={this.updatePassword}></input>
                <button type="button" onClick={this.setUser}>wow so good</button>
            </form>
                
            </div>
        );
    }

}

export default Home;