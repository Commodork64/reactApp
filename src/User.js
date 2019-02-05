import React, { Component } from 'react';
import './User.css';
import axios from 'axios';

class User extends Component {

    constructor() {

        super();

        this.state = {
            userData: [{}],
            userGamesList: [{}],
            id: 2
        }

        axios.get("http://localhost:8080/SoloProjectCalin/api/user/getAllUsers")
            .then(response => {
                this.setState({ userData: response.data[this.state.id - 1] })
            })

        axios.get("http://localhost:8080/SoloProjectCalin/api/user/getGamesForUser/" + this.state.id)
            .then(response => {
                this.setState({ userGamesList: response.data })
            })
    }

    removeListEntry(itemToRemove) {
        // To be implemented
    }

    render() {

        return (
            <div className="User" >
                <section>
                    {console.log("userdata: ", this.state.userData)}
                    {console.log(this.state.userData.userName)}
                    <h2 className="userNameTitle">{this.state.userData.userName} 's List</h2>
                    <hr className="hrShadow" />
                </section>
                <section className="userDetails">
                    <ul className="UDListStyle">
                        <h3 className="userDetailsTitle">Statistics</h3>
                        {console.log("line 44: ", this.state.userData)}
                        <li className="UDListItem">Username: {this.state.userData.userName}</li>
                        <li className="UDListItem">Date of Birth: {this.state.userData.dateOfBirth} </li>
                    </ul>
                </section>
                <section className="userListContainer">
                    <div>
                        {this.state.userGamesList.map((game, i) => {
                            return (
                                <div>
                                    <ul>
                                        <li className="userListItem">Title: {game.gameName}</li>
                                        <li className="userListItem">Release year: {game.releaseYear}</li>
                                        <li className="userListItem">Genre: {game.genre}</li>
                                        <li className="userListItemButton"><button onClick={this.removeListEntry(i)}>Remove</button></li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        );

    }
}

export default User;