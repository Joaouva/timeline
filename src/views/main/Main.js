import React from "react";
import Header from "../../components/header/Header";
import Timeline from "../../components/timeline/Timeline";


import "./Main.styles.scss";

function Main() {

  return (
    <div className="container">
      <Header />
      <Timeline/>
    </div>
  );
}

export default Main;
