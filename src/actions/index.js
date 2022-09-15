import axios from "axios";
import { SIGNUP } from "./types";

export const signUp = (formProps) => (dispatch) => {
  //sign a new person up
  axios.post("http://localhost:3090/signup", formProps).then((res) => {
    console.log(res);
    // dispatch({type: SIGNUP, payload: res.data});
  });
};
