import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signUp = (formProps, redirect) => (dispatch) => {
  //sign a new person up
  axios
    .post("http://localhost:3090/signup", formProps)
    .then((res) => {
      console.log("Signup successful");
      dispatch({ type: AUTH_USER, payload: res.data.token });
      localStorage.setItem("token", res.data.token);
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

export const signOut = () => {
  localStorage.removeItem("token");

  //can use the same action as sign in, but just pass empty string to unauthenticate the user
  return { type: AUTH_USER, payload: "" };
};

export const signIn = (formProps) => (dispatch) => {
  axios
    .post("http://localhost:3090/signin", formProps)
    .then((res) => {
      console.log(res);
      dispatch({ type: AUTH_USER, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      switch (err.response.status) {
        case 401:
          dispatch({
            type: AUTH_ERROR,
            payload: "Email or password is incorrect",
          });
          break;
        case 404:
          dispatch({
            type: AUTH_ERROR,
            payload: "Connection error: Please try again later",
          });
          break;
        default:
          console.log(err);
          dispatch({
            type: AUTH_ERROR,
            payload: err.message,
          });
      }
    });
};
