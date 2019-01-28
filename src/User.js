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

    removeListEntry(itemToRemove) {
        axios.put('http://localhost:8080/SoloProjectCalin/api/user/updateUser/${this.userData.userid}')
        .then(response => {
            this.setState({userData: response.data})
        })
    }

    render() {

        const getNestedObject = (nestedObj, pathArr) => {
            return pathArr.reduce((obj, key) =>
                (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
        }

        console.log(getNestedObject(this.state.userData[0], ['games', 0]));

        let userGames = this.state.userData.map((game, i) => {
            return (
                <div>
                    <ul>
                        <li className="userListItem">Title: {getNestedObject(this.state.userData[0], ['games', i, 'gameName'])}</li>
                        <li className="userListItem">Release Date: {getNestedObject(this.state.userData[0], ['games', i, 'releaseYear'])}</li>
                        <li className="userListItem">Genre: {getNestedObject(this.state.userData[0], ['games', i, 'genre'])}</li>
                        <li className="userListItemButton"><button onClick={this.removeListEntry(i)}>Remove</button></li>
                    </ul>
                </div>
            );
        })

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
                {userGames}
            </section>
                </div>
        );

    }
}

export default User;