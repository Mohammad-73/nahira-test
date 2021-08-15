import React, { useEffect, useState } from "react";
import classes from "./Login.module.scss";
import { useSelector } from "react-redux";
import emailValidationRegex from "../../helper/emailValidationRegex";
import userActions from "../../store/user/user.actions";

export default function Login() {
  const user = useSelector((state) => state.user);
  const [emailValidation, setEmailValidation] = useState(true);
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
  useEffect(() => {
    setEmailValidation(emailValidationRegex(userEmail));
  }, [userEmail]);

  return (
    <div className={classes.rootLogin}>
      <div className={classes.loginForm}>
        <form onSubmit={handleSubmit}>
          <div className={classes.container}>
            <label htmlFor="userEmail" />
            <b>Username</b>
            <input
              value={userEmail}
              name="userEmail"
              onChange={handleChange}
              type="email"
              placeholder="Enter Email"
              required
            />
            <div
              className={
                emailValidation ? `${classes.valid}` : `${classes.invalid}`
              }
            >
              <span>{emailValidation ? "valid" : "invalid"}</span>
            </div>
            <label htmlFor="userPass" />
            <b>Password</b>
            <input
              value={userPass}
              name="userPass"
              onChange={handleChange}
              type="password"
              placeholder="Enter Password"
              required
            />
            <button
              onClick={() => userActions.login(userEmail, userPass)}
              type="submit"
            >
              Login
            </button>
            <p>{user}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
