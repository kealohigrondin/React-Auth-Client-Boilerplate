import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { changeAuth } from "../actions/index";

class Nav extends React.Component {
  render() {
    return (
      <div className="ui primary menu" style={{ marginBottom: "2em" }}>
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/signup" className="item">
          Sign Up
        </Link>
        <div className="right menu">
          <button>Sign In</button>
        </div>
      </div>
    );
  }
}
export default Nav;
