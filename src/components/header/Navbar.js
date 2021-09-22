import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../util/actions/index";

import "./Navbar.styles.scss"

function Navbar(props) {
    const dispatch = useDispatch();
   

    const logOutUser = () => {
        dispatch(logOut());
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
            <button onClick={logOutUser}>Log Out</button>
          </li>
        </ul>
      </div>
    );
}

export default Navbar;