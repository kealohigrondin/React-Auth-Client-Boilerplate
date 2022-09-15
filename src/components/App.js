import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Welcome from "./Welcome";
import SignUp from "../components/auth/SignUp";
import SecureHome from "../components/SecureHome";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="ui container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<SecureHome />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
