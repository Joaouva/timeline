import React from "react";

function Login(props) {
    const setIsLoggedIn = props.setIsLoggedIn;
    
    const loginUser = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        alert('hi')
    }


  return (
    <div className="login">
      <div className="login-form">
        <form>
          <input type="text" className="login-input" placeholder="Username" />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
          />
                  <button className="login-button" onClick={(e) => { loginUser(e) }} >Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
