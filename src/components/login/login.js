import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../util/actions/index";

function Login() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  

  const logInUser = (e) => {
    e.preventDefault();
    dispatch(logIn());
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
          <button
            className="login-button"
            onClick={(e) => {
              logInUser(e);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
