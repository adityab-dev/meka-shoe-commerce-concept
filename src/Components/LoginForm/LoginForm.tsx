import { useAppDispatch } from "../../store/hooks/hooks";
import { useState } from "react";

import { Link } from "react-router-dom";

import { loginRequest } from "../../store/slices/users-slice";

import { registerPath } from "../../paths/paths";

import './LoginForm.css'

import logo from "../../Assets/logo.png";

function LoginForm() {
  const [inputUsername, SetInputUsername] = useState("");

  const dispatch = useAppDispatch();
  function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    SetInputUsername(event.target.value);
  }

  function fomrSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    dispatch(loginRequest(inputUsername));
  }

  const loginForm = (
    <div className="login-container-center login-bg-red">
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
  );

  return loginForm;
}

export default LoginForm;
