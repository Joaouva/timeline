import React from 'react';

import "./Navbar.styles.scss"

function Navbar() {

    
    return (
        <div className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
    )
}

export default Navbar;