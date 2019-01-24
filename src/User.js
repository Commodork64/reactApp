import React from 'react';
import './User.css';
import GamePic from './Content/Mario64.png';
import GetUserData from './GetUserData.js';

class User extends Component {

    state = {
        userData: []
    }

    getDatData = () => {
        axios.get("localhost:8000/getUserData")
        .then(res => {
          const userData =  res.data;
          this.setState({ userData })
        })  
        }

    render() {
    return (
        <div className="User">
            <GetUserData />
            <section>
                <h2 className="userNameTitle">(name)'s' List</h2>
                <hr className="hrShadow" />
            </section>
            <section className="userDetails">
                <ul className="UDListStyle">
                    <h3 className="userDetailsTitle">Statistics</h3>
                    <li className="UDListItem">username: { userData.name }</li>
                    <li className="UDListItem">age: 25 { userData.dateOfBirth } </li>
                    <li className="UDListItem">Games Played: { userData.gamesPlayed }</li>
                </ul>
            </section>
            <section className="userListContainer">
                <ul className="userList">
                    <li className="userListItem"><img src={GamePic}></img></li>
                    <li className="userListItem">Game name { userData.games[0].name }</li>
                    <li className="userListItem">Release Date: { userData.games[0].releaseDate }</li>
                    <li className="userListItem">Genre: { userData.games[0].genre }</li>
                    <li className="userListItemButton"><button>Remove</button> </li>
                </ul>
            </section>
        </div>
    );
}

}

export default User;