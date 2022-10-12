import React from "react";

import "./App.css";
import BodyContent from "./BodyContent";
import Nav from "./Nav";
function Home() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <BodyContent content="Wellcome to react all in one study place" />
      </div>
    </div>
  );
}

export default Home;
