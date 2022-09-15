import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <form className="ui form">
        <fieldset>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              aria-label="email"
              placeholder="Enter email"
            ></input>
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="text"
              aria-label="password"
              placeholder="Enter new password"
            ></input>
          </div>
          <div className="field">
            <input
              type="text"
              aria-label="password"
              placeholder="Confirm new password"
            ></input>
          </div>
        </fieldset>
      </form>
    );
  }
}
export default Signup;
