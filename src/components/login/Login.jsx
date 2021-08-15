import React from "react";
import store from "../../store";

export default function Login() {
  return (
    <div>
      <button onClick={() => store.dispatch({ type: "login" })}>login</button>
      <button onClick={() => store.dispatch({ type: "logout" })}>logout</button>
    </div>
  );
}
