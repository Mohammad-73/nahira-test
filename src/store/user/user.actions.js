export function login() {
  return {
    type: "login",
    payload: "mohammad",
  };
}

export function logout() {
  return {
    type: "logout",
  };
}

export function reset() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "reset" });
    }, 1000);
  };
}
