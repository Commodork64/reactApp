import React, { Component } from 'react';
import './User.css';
import axios from 'axios';

class User extends Component {

    constructor() {

        super();

        this.state = {
            userData: [{}]
        }

        axios.get("http://localhost:8080/SoloProjectCalin/api/user/getAllUsers")
            .then(response => {
                this.setState({ userData: response.data })
            })
    }

    removeListEntry() {
        console.log("I'm being called!")
    }

    render() {
        
        const gameName = getNestedObject(this.state.userData, ['games', 0, 'gameName']);
        const releaseYear = getNestedObject(this.state.userData, ['games', 'releaseYear']);
        const genre = getNestedObject(this.state.userData, ['games', 'genre']);

        let userGames = this.state.userData.map((game, i) => {
            return (
                <div>
                    <ul>
                        <li>{game.gameName}</li>
                        <li>{game.releaseYear}</li>
                        <li>{game.genre}</li>
                    </ul>
                </div>
            );
        })
    }

    return(
        <div className = "User" >
            <section>
                {console.log(this.state.userData)}
                <h2 className="userNameTitle">{this.state.userData[0].userName} 's List</h2>
                <hr className="hrShadow" />
            </section>
            <section className="userDetails">
                <ul className="UDListStyle">
                    <h3 className="userDetailsTitle">Statistics</h3>
                    <li className="UDListItem">Username: {this.state.userData[0].userName}</li>
                    <li className="UDListItem">Date of Birth: {this.state.userData[0].dateOfBirth} </li>
                </ul>
            </section>
            <section className="userListContainer">
                {this.gameName}
            </section>
                </div>
        );

        const getNestedObject = (nestedObj, pathArr) => {
            return pathArr.reduce((obj, key) =>
                (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
        }
    }
}

export default User;