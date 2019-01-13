import React from 'react';
import './NavBar.css';

const NavBar = () => {
    
    return (
        <div className="NavBar">
            <nav>
                <ul>
                    <li className="NavBarLinks"> <a href="www.google.com">Home</a></li>
                    <li className="NavBarLinks"> <a href="www.google.com">User</a></li>
                    <li className="NavBarLinks"> <a href="www.google.com">List</a></li>
                    <li className="NavBarUserName">Logout/login</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;