export default function userReducer(state, action) {
  switch (action.payload) {
    case "login": {
      return action.payload;
    }
    case "logout": {
      return null;
    }
    default:
      return state;
  }
}
