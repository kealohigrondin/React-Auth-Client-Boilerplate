import React from "react";
import requireAuth from "./requireAuth";

class SecureHome extends React.Component {
  render() {
    return <h1>Secure Homepage (user is logged in at this point)</h1>;
  }
}
export default requireAuth(SecureHome);
