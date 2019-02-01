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
        // ToBeImplemented
    }

    removeDuplicates(array) {
        console.log(array);
        let returnValue = [];
        let found = false;
        for (let x of array) {
            found = false;
            for (let y of returnValue) {
                found = found || (x.gameName == y.gameName);
            }
            if (!found) {
                returnValue.push(x);
            }
        }
        console.log(returnValue);
        return returnValue;
    }

    render() {

        let uniqueGames = this.removeDuplicates(this.state.gameData);

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