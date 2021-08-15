import React, { useState } from "react";

import { useSelector } from "react-redux";
import userActions from "../../store/user/user.actions";

export default function Login() {
  const user = useSelector((state) => state.user);
  const [loginValue, setLoginValue] = useState({
    userEmail: "",
    userPass: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setLoginValue({ ...loginValue, [name]: value });
  }

  const { userEmail, userPass } = loginValue;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{user}</h2>
        <input
          value={userEmail}
          name="userEmail"
          onChange={handleChange}
          type="email"
        />
        <input
          value={userPass}
          name="userPass"
          onChange={handleChange}
          type="password"
        />
        {loginValue.userEmail}
        <button onClick={() => userActions.login(userEmail, userPass)}>
          login
        </button>
        <button onClick={() => userActions.logout()}>logout</button>
      </form>
    </div>
  );
}
