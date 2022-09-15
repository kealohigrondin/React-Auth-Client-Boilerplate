import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

import { signOut } from "../../actions/index";

class SignOut extends React.Component {
  componentDidMount() {
    this.props.signOut();
  }
  render() {
    return <Navigate to="/" />;
  }
}
export default connect(null, { signOut })(SignOut);
