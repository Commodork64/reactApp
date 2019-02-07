import React, { Component } from 'react';
import './Logout.css';

class Logout extends Component {

    constructor() {

        super();

        this.state = {
        }
    }

    logOutUser() {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("id");

        window.location.reload();
    }

    render() {

        return (
            <div className="Logout">
            <div>
                <div>
                    {this.logOutUser}
                </div>
            </div>
                <h2 className="logoutH2">You have been successfully logged out!</h2>
            </div>
        );
    }
}

export default Logout;