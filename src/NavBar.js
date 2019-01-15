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

const NavBar = () => {
    
    return (
        <Router>
            <div className="NavBar">
                <nav>
                    <ul className="NavBar_ul">
                        <li className="NavBarLinks"><Link to="/">Home</Link></li>
                        <li className="NavBarLinks"><Link to="/User">User</Link></li>
                        <li className="NavBarLinks"><Link to="/Game">Game</Link></li>
                        <li className="NavBarUserName">Logout/login</li>
                    </ul>

                    <Route exact path="/" component={Home}/>
                    <Route path="/User" component={User}/>
                    <Route path="/Game" component={Game}/>
                </nav>
            </div>
        </Router>
        
    );
}

export default NavBar;