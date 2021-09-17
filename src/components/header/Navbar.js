import React from 'react';
import { NavLink } from "react-router-dom";

import "./Navbar.styles.scss"

function Navbar(props) {

    const setIsLoggedIn = props.setIsLoggedIn;

    const logOut = () => {
        setIsLoggedIn(false);
    }
    
    return (
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <button onClick={logOut}>Log Out</button>
          </li>
        </ul>
      </div>
    );
}

export default Navbar;