import React from 'react';
import './Home.css';
import N64Logo from './Content/N64Logo.svg';
import MainPageIcon from './MainPageIcon';

const Home = () => {
    
    return (
        <div className="Home_img">
            <div id="imageBox">
                <img src={N64Logo}></img>
            </div>
            <MainPageIcon />
        </div>
    );
}

export default Home;