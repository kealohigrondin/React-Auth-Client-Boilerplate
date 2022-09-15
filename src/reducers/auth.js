const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN":
    case "LOGOUT":
    case "SIGNUP":
      return state;
    default:
      return state;
  }
}
