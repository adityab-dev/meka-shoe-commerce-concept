import "./Login.css";

import logoSrc from "../../Assets/logo.png";

function Login() {
  const loginForm = (
    <form className="login-form">
      <input
        type="text"
        placeholder="username/email"
      />
      <input
        type="password"
        placeholder="password"
      />
      <button type="submit">Login</button>
    </form>
  );

  const registerButton = (
    <button
      type="button"
      className="login-register-btn"
    >
      Register
    </button>
  );

  const logo = (
    <img
      src={logoSrc}
      alt="logo"
    />
  );

  return (
    <section className="login-container">
      {logo}
      {loginForm}
      {registerButton}
    </section>
  );
}

export default Login;
