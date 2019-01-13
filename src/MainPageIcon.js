import React from 'react';
import './MainPageIcon.css';
import icon from './Content/testIcon.png'

const MainPageIcon = () => {
    
    return (
        <div className="MainPageIcon">
            <img className="icon1" src={icon}></img>
            <img className="icon2" src={icon}></img>
            <img className="icon3" src={icon}></img>
            <img className="icon4" src={icon}></img>
            <img className="icon5" src={icon}></img>
            <img className="icon6" src={icon}></img>
        </div>
    );
}

export default MainPageIcon;