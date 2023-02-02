import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { loginRequest } from "../../store/slices/users-slice";

import { arrivalProductsPath, registerPath } from "../../paths/paths";

import logo from "../../Assets/logo.png";

import "./Login.css";

function Login() {
  const users = useAppSelector((state) => state.users);

  const [inputUsername, SetInputUsername] = useState<string>("");

  const [invalidCredentials, setInvalidCredentials] = useState<boolean | undefined>();

  const dispatch = useAppDispatch();

  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    SetInputUsername(event.target.value);
  }

  function fomrSubmitHandler(event: React.FormEvent) {
    event.preventDefault();

    dispatch(loginRequest(inputUsername));

    setInvalidCredentials(true);
  }

  return (
    <main className="login-container">
      {users.loginStatus.isLoggedIn === true ? (
        <Navigate to={arrivalProductsPath} />
      ) : (
        <div className="login-container-center login-bg-red">
          {invalidCredentials ? <p>Invalid Credentials</p> : null}

          <div className="login-logo-container">
            <img src={logo} alt="logo" />
          </div>

          <form onSubmit={fomrSubmitHandler}>
            <input
              type="text"
              placeholder="username/email"
              id="email"
              name="email"
              required
              onChange={inputChangeHandler}
            />

            <input type="password" placeholder="password" id="password" name="password" required />

            <button type="submit">Login</button>
          </form>

          <button type="button">
            <Link className="login-color" to={registerPath}>
              Register
            </Link>
          </button>
        </div>
      )}
    </main>
  );
}

export default Login;
