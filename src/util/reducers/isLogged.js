const initialState = {
  isLoggedIn: false,
};

function loggedReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isLoggedIn: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        isLoggedIn: false,
      };
    default:
          return {
          ...state
      }
  }
}

export default loggedReducer;
