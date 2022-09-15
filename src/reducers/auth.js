import { AUTH_USER, AUTH_ERROR } from "../actions/types";

export default function authReducer(state = null, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case AUTH_USER: //payload needs to be the jwt token
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
}
