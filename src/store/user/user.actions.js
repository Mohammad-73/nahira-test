import { bindActionCreators } from "redux";
import store from "../index";
function login() {
  return {
    type: "login",
    payload: "mohammad",
  };
}

function logout() {
  return {
    type: "logout",
  };
}

const userActions = bindActionCreators({ login, logout }, store.dispatch);

export default userActions;
