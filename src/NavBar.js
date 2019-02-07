import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import React from 'react';
import './NavBar.css';
import Home from './Home';
import User from './User';
import Game from './Game';
import Login from './Login';

const NavBar = () => {

    function loggedIn() {
        if (sessionStorage.getItem("username") == null) {
            return <ul className="NavBar_ul">
                <li className="NavBarLinks"><Link to="/">Home</Link></li>
                <li className="NavBarUserName"><Link to="/Login">Login</Link></li>
            </ul>
        }
        else {
            return <ul className="NavBar_ul">
                <li className="NavBarLinks"><Link to="/">Home</Link></li>
                <li className="NavBarLinks"><Link to="/User">User</Link></li>
                <li className="NavBarLinks"><Link to="/Game">Game</Link></li>
                <li className="NavBarUserName" onClick={() => {
                            sessionStorage.removeItem("username");
                            sessionStorage.removeItem("id");
                    
                            window.location.reload();
                        }
                }>Logout</li>
            </ul>
        }
    }

    return (
        <Router>
            <div className="NavBar">
                <nav>
                    {loggedIn()}

                    <Route exact path="/" component={Home} />
                    <Route path="/User" component={User} />
                    <Route path="/Game" component={Game} />
                    <Route path="/Login" component={Login} />
                </nav>
            </div>
        </Router>

    );
}

export default NavBar;