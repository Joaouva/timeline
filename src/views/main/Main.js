import React, { useState } from "react";
import Header from "../../components/header/Header";
import Timeline from "../../components/timeline/Timeline";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "../../components/about/About";
import MyCompany from "../../components/about/mycompany/MyCompany";
import MyProfile from "../../components/about/myprofile/MyProfile";
import Login from "../../components/login/login";
import Contacts from "../../components/contacts/contacts";
import { useSelector } from "react-redux";


import "./Main.styles.scss";


function Main() {
  const isLoggedIn = useSelector((state) => state.loggedReducer.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Timeline} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about/mycompany" component={MyCompany} />
            <Route exact path="/about/myprofile" component={MyProfile} />
            <Route exact path="/contacts" component={Contacts}/>
          </Switch>
        </div>
      ) : (
        <div>
          <Route
            exact
            path="/"
            render={() => {
              if (isLoggedIn) {
                return <Redirect to="/" />;
              } else {
                return <Login/>;
              }
            }}
          />
          <Route
            exact
            path="/about"
            render={() => {
              if (isLoggedIn) {
                return <Redirect to="/about" />;
              } else {
                return <Login />;
              }
            }}
          />
          <Route
            exact
            path="/about/mycompany"
            render={() => {
              if (isLoggedIn) {
                return <Redirect to="/about/mycompany" />;
              } else {
                return <Login />;
              }
            }}
          />
          <Route
            exact
            path="/about/myprofile"
            render={() => {
              if (isLoggedIn) {
                return <Redirect to="/about/myprofile" />;
              } else {
                return <Login />;
              }
            }}
          />
          <Route
            exact
            path="/contacts"
            render={() => {
              if (isLoggedIn) {
                return <Redirect to="/contacts" />;
              } else {
                return <Login />;
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Main;
