import { bindActionCreators } from "redux";
import store from "../index";
function login(userEmail, userPass) {
  return {
    type: "login",
    payload: [userEmail, userPass],
  };
}

function logout() {
  return {
    type: "logout",
  };
}

const userActions = bindActionCreators({ login, logout }, store.dispatch);

export default userActions;
