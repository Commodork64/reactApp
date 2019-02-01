import React, { Component } from 'react';
import './Game.css';
import axios from 'axios';

class Game extends Component {

    constructor() {

        super();

        this.state = {
            gameData: []
        }

        axios({
            method: 'get',
            url: 'http://localhost:8080/SoloProjectCalin/api/game/getGames',
        })
            .then(response => {
                this.setState({ gameData: response.data })
            })
    }

    AddListEntry(itemToRemove) {
        // axios.put('http://localhost:8080/SoloProjectCalin/api/user/updateUser/${this.userData.userid}')
        // .then(response => {
        //     this.setState({userData: response.data})
        // })
    }

    render() {

        let uniqueGames = [];

        for (let i = 0; i < this.state.gameData.length; i++) {
            if (!uniqueGames.includes(this.state.gameData[i].gameName)) {
                console.log(uniqueGames);
                uniqueGames.push(this.state.gameData[i])
            }
        }

        console.log(uniqueGames);

        let gameList = uniqueGames.map((game, i) => {
            return (
                <div>
                    <ul>
                        <li className="userListItem">Title: {game.gameName} </li>
                        <li className="userListItem">Release Date: {game.releaseYear} </li>
                        <li className="userListItem">Genre: {game.genre} </li>
                        <li className="userListItemButton"><button onClick={this.AddListEntry(i)}>AddToList</button></li>
                    </ul>
                </div>
            );
        })

        return (
            <div className="Game">
                <ul>
                    <li className="gameListItem">{gameList}</li>
                </ul>
            </div>
        );
    }
}

export default Game;