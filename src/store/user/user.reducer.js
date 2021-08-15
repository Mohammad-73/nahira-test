import userValidation from "../../helper/userValidation";

export default function userReducer(state = null, action) {
  switch (action.type) {
    case "login":
      return userValidation(action.payload);

    case "logout":
      return "logout";

    case "reset":
      return "please login";

    default:
      return state;
  }
}
