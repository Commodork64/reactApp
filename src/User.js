import React from 'react';
import './User.css';
import GamePic from './Content/Mario64.png';
import GetUserData from './GetUserData.js';

const User = () => {

    function myFunction(p1, p2) {
        return p1 + p2;
    }

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
                    <li className="UDListItem">username: username</li>
                    <li className="UDListItem">age: 25</li>
                    <li className="UDListItem">Games Played: 2</li>
                    <li className="UDListItem">Games Owned: 2</li>
                    <li className="UDListItem">Games Completed: 2</li>
                </ul>
            </section>
            <section className="userListContainer">
                <ul className="userList">
                    <li className="userListItem"><img src={GamePic}></img></li>
                    <li className="userListItem">Game name</li>
                    <li className="userListItem">Release Date: </li>
                    <li className="userListItem">Genre: </li>
                    <li className="userListItemButton"><button>Remove</button> </li>
                </ul>
            </section>
        </div>
    );
}

export default User;