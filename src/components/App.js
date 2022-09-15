import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Welcome from "./Welcome";
import SignUp from "../components/auth/SignUp";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="ui container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
