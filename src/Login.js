import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import config from 'config';

class Login extends Component {

    constructor() {

        super();

        this.state = {
            users: [],
            username: "",
            password: "",
            id: ""
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
                url: config.api + 'user/getAllUsers',
            })
            .then(response => {
                this.setState({
                    users: response.data
                });
                    let password = this.state.password;
                    let username = this.state.username;
                    this.state.users.forEach(function(user) {
                        if (username === user.userName && password === user.password) {
                            sessionStorage.setItem("username", username);
                            sessionStorage.setItem("id", user.userid);
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

export default Login;