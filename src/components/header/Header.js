import React from 'react';
import Navbar from './Navbar';

import "./Header.styles.scss"
import Logo from '../../assets/logo512.png'

function Header() {
    
    return (
        <div className="header">
            <img src={Logo} alt="logo"/>
            <Navbar/>
        </div>
    )
}

export default Header;