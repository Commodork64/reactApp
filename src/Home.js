import React from 'react';
import './Home.css';
import N64Logo from './Content/N64Logo.svg';

const Home = () => {
    
    return (
        <div className="App">
            <div id="imageBox">
            <img src={N64Logo} />
            </div>
        </div>
    );
}

export default Home;