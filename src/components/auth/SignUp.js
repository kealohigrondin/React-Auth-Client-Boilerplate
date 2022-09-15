import React from "react";
import { connect } from "react-redux";
import { Field, Form } from "react-final-form";

import { signUp, authError } from "../../actions/index";

class SignUp extends React.Component {
  state = { errorMessage: "" };

  handleSubmit = ({ email, password, passwordConfirm }) => {
    console.log(
      `Email: ${email}\nPW: ${password}\nPWconfirm: ${passwordConfirm}`
    );
    if (password === passwordConfirm) {
      this.props.signUp({ email, password });
    } else {
      console.log("passwords don't match");
      this.props.authError("Passwords don't match");
      //clear pw fields
    }
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form className="ui form" onSubmit={handleSubmit}>
            <fieldset>
              <div className="field">
                <label>Email</label>
                <Field
                  component="input"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="field">
                <label>Password</label>
                <Field
                  component="input"
                  name="password"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>
              <div className="field">
                <Field
                  component="input"
                  name="passwordConfirm"
                  type="password"
                  placeholder="Confirm new password"
                />
              </div>
              <button className="ui button primary" type="submit">
                Submit
              </button>
              {this.props.errorMessage}
            </fieldset>
          </form>
        )}
      ></Form>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps, { signUp, authError })(SignUp);
