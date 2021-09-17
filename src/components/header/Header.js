import React from 'react';
import Navbar from './Navbar';

import "./Header.styles.scss"
import Logo from '../../assets/logo512.png'

function Header(props) {
    
    return (
        <div className="header">
            <img src={Logo} alt="logo"/>
            <Navbar {...props}/>
        </div>
    )
}

export default Header;