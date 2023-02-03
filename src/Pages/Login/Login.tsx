import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks/hooks";

import { arrivalProductsPath } from "../../paths/paths";

import LoginForm from "../../Components/LoginForm/LoginForm";

function Login() {
  const users = useAppSelector((state) => state.users);
  const isLoggedIn = users.loginStatus.isLoggedIn;

  return (
    <main className="login-container">
      {isLoggedIn === true ? <Navigate to={arrivalProductsPath} /> : <LoginForm />}
    </main>
  );
}

export default Login;
