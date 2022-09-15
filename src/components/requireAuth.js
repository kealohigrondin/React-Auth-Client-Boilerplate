import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

//lowercase means this file will export as default a FUNCTION not a class

export default function requireAuth(ChildComponent) {
  class ComposedComponent extends React.Component {
    //navigates back to the root page if this.props.auth is false
    render() {
      if (!this.props.auth) console.log("requireAuth HOC blocked navigation");
      return (
        <>
          {!this.props.auth && <Navigate to="/" />}
          <ChildComponent {...this.props} />
        </>
      );
    }
  }
  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated };
  };

  return connect(mapStateToProps)(ComposedComponent);
}

// BOILERPLATE FOR HIGHER ORDER COMPONENT
// export default (ChildComponent) => {
//     class ComposedComponent extends React.Component {
//       render() {
//         return <ChildComponent />;
//       }
//     }
//     return ComposedComponent;
//   };
