import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signUp = (formProps, redirect) => (dispatch) => {
  //sign a new person up
  axios
    .post("http://localhost:3090/signup", formProps)
    .then((res) => {
      console.log("Signup successful");
      dispatch({ type: AUTH_USER, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      //email in use error
      if (err.response.status === 422) {
        dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
      }
    });
};

export const authError = (msg) => {
  return { type: AUTH_ERROR, payload: msg };
};
