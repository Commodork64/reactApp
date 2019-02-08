import React, { Component } from 'react';
import './Game.css';
import axios from 'axios';
import config from './config';

class Game extends Component {

    constructor() {

        super();

        this.state = {
            gameData: [],
            userid: sessionStorage.getItem("id")
        }

        axios({
            method: 'get',
            url: config.api + 'game/getGames',
        })
            .then(response => {
                this.setState({ gameData: response.data })
            })
    }

    AddListEntry(name, year, genre) {
        axios({
            method: 'post',
            url: config.api + 'game/addGame',
            data: {
                gameName: name,
                releaseYear: year,
                genre: genre,
                userid: sessionStorage.getItem("id")
            }
        })
            .then(response => {
                alert("game added");
            })
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
                        <li className="userListItemButton"><button onClick={() => this.AddListEntry(game.gameName, game.releaseYear, game.genre)}>AddToList</button></li>
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