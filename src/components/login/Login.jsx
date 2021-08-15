import React from "react";

import { useSelector, useDispatch } from "react-redux";
import userActions from "../../store/user/user.actions";

export default function Login() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>{user}</h2>
      <button onClick={() => userActions.login()}>login</button>
      <button onClick={() => userActions.logout()}>logout</button>
    </div>
  );
}
