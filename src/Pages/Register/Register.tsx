import "./Register.css";

import logoSrc from "../../Assets/logo.png";

function Register() {
  const form = (
    <form className="register-form">
      <input
        type="text"
        placeholder="username/email"
      />
      <input
        type="password"
        placeholder="password"
      />
      <input
        type="password"
        placeholder="confirm password"
      />
      <button type="submit">Signup</button>
    </form>
  );

  const signInButton = (
    <button
      type="button"
      className="register-signIn-btn"
    >
      Sign In
    </button>
  );

  const logo = (
    <img
      src={logoSrc}
      alt="logo"
    />
  );

  return (
    <section className="register-container">
      {logo}
      {form}
      {signInButton}
    </section>
  );
}

export default Register;
