import React, { Component } from 'react';
import './User.css';
import axios from 'axios';

class User extends Component {

    
    constructor() {

        super();

        this.state = {
            userData: []
        }
        
        // <li className="userListItem"><img src={game.gamePic}></img></li>
    }

    componentDidMount() {
        axios.get("localhost:8080/SoloProjectCalin/api/user/getAllUsers")
            .then(response => {
                console.log("hi");
                console.log(response);
                this.setState({ userData: response.data})
            })
        }
        
        // axios({
        //     method: 'get',
        //     url: ('localhost:8080/SoloProjectCalin/api/user/getAllUsers')
        // })
        // .then(response => {
        //     console.log("FUIASHDUIFH");
        //     const rawData = response.data;

        //     this.setState({ userData: rawData });
        // })

    render() {
        
        let userGames = this.state.userData.map((game, i) => (
            <ul className="userList">
                <li className="userListItem">Game name {game.gameName}</li>
                <li className="userListItem">Release Date: {game.releaseYear}</li>
                <li className="userListItem">Genre: {game.genre}</li>
                <li className="userListItemButton"><button>Remove</button> </li>
            </ul>
        ));

        return (
        <div className="User">
                    <section>
                        {console.log(this.state.userData)}
                        <h2 className="userNameTitle">{ JSON.stringify(this.state.userData.userName)}'s' List</h2>
                        <hr className="hrShadow" />
                    </section>
                    <section className="userDetails">
                        <ul className="UDListStyle">
                            <h3 className="userDetailsTitle">Statistics</h3>
                            <li className="UDListItem">Username: {this.state.userData.userName}</li>
                            <li className="UDListItem">Date of Birth: {this.state.userData.dateOfBirth} </li>
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