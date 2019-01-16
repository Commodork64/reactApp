import React from 'react';
import './User.css';
import GamePic from './Content/Mario64.png';

const User = () => {
    
    return (
            <div className="User">
                <container className="pictureContainer">
                    <h2>Favourite Game</h2>
                    <img className="favouriteGame" src={GamePic}></img>
                </container>
                    <section className="userDetails">
                        <ul>
                            <li>username: </li>
                            <li>age: </li>
                        </ul>
                    </section>

                    <section className="listData">
                    </section>
            </div>      
    );
}

export default User;