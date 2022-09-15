import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Welcome from "./Welcome";
import Signup from "../auth/Signup";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="ui container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
