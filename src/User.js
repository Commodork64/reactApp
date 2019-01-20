import React from 'react';
import './User.css';
import GamePic from './Content/Mario64.png';

const User = () => {

    function myFunction(p1, p2) {
        return p1 + p2; 
    }
    
    return (
            <div className="User">
                    <section>
                        <h2 className="userNameTitle">(name)'s' List</h2>
                        <hr className="hrShadow"/>
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
                    <img src={GamePic}></img>
                    <img src={GamePic}></img>
                    <img src={GamePic}></img>
                    <img src={GamePic}></img>
                    <img src={GamePic}></img>
                    <img src={GamePic}></img>
                    <img src={GamePic}></img>
            </div>      
    );
}

export default User;