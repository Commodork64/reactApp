import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import React from 'react';
import './NavBar.css';

const NavBar = () => {
    
    return (
        <Router>
            <div className="NavBar">
                <nav>
                    <ul>
                        <li className="NavBarLinks"><Link to="/">Home</Link></li>
                        <li className="NavBarLinks"><Link to="/">User</Link></li>
                        <li className="NavBarLinks"><Link to="/">Game</Link></li>
                        <li className="NavBarUserName">Logout/login</li>
                    </ul>

                    <Route exact path="/"/>
                </nav>
            </div>
        </Router>
        
    );
}

export default NavBar;