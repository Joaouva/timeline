import React from 'react';
import { NavLink } from "react-router-dom";


function About() {
    
    return (
      <div className="about">
        <h1>About</h1>
        <div>
          <NavLink to="/about/mycompany">My Company</NavLink>
        </div>
        <div>
          <NavLink to="/about/myprofile">My Profile</NavLink>
        </div>
      </div>
    );

}

export default About;