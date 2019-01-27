import React, { Component } from 'react';
import './User.css';
import axios from 'axios';

class User extends Component {

    constructor() {

        super();

        this.state = {
            userData: [{ }]
        }
        
        //<li className="userListItem"><img src={game.gamePic}></img></li>
        
        axios.get("http://localhost:8080/SoloProjectCalin/api/user/getAllUsers")
            .then(response => {
                this.setState({ userData: response.data})
            })
        }

        removeListEntry() {
            console.log("I'm being called!")
        }

    render() {
        {console.log(this.state.userData[0].userName)}

        let userGames = this.state.userData.map((user, i) => {
            return (
              <div key={i}>
                <ul >{user.value}</ul>
               {
                user.games.map((game, i) => {
                  return (
                     <ul className="userList">
                         <li>{game[i].gameName}</li>
                         <li>{game[i].releaseYear}</li>
                         <li>{game[i].genre}</li>
                     </ul>
                  )
                })
               }
              </div>
            )});

        return (
        <div className="User">
                    <section>
                        {console.log(this.state.userData)}
                        <h2 className="userNameTitle">{ this.state.userData[0].userName} 's List</h2>
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