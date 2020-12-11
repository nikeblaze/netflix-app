import React from 'react';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginBtn from '../LoginBtn/LoginBtn';
import logo from '../assets/netflix-logo.svg'
import '../NetflixMain/NetflixMain.css';
import '../AppBar/AppBar.css';

console.log(logo);


const netFlixMain = () => {
    return (
        
        <AppBar className="main-page">
            <AppLogo logo={logo}/> 
        </AppBar>
       
    )
}

export default netFlixMain;