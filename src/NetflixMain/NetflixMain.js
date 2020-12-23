import React from 'react';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginBtn from '../LoginBtn/LoginBtn';
import logo from '../assets/netflix-logo.svg'
import './NetflixMain.css';


console.log(logo);


const netFlixMain = () => {
    return (
        <div className="main-page">
        <AppBar>
            <AppLogo logo={logo}/> 
        </AppBar>
        </div>
       
    )
}

export default netFlixMain;