import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { loginRequest } from "../../store/slices/users.-slice";

import { arrivalProductsPath, registerPath } from "../../paths/paths";

function Login() {
    const users = useAppSelector((state) => state.users);

    const [inputUsername, SetInputUsername] = useState<string>("");

    const [hasInvalidCredentials, setHasInvalidCredentials] = useState<boolean | undefined>();

    const dispatch = useAppDispatch();

    function inputChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        SetInputUsername(event.target.value);
    }

    function fomrSubmitHandler(event: React.FormEvent) {
        event.preventDefault();

        let isValid: boolean = false;

        users.forEach((user) => {
            if (user.username === inputUsername) {
                isValid = true;
            }
        });

        if (isValid) {
            dispatch(loginRequest(inputUsername));
            setHasInvalidCredentials(false);
        } else {
            setHasInvalidCredentials(true);
        }
    }

    const logo = <img src={undefined} alt="logo" />;

    const loginForm = (
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
    );

    const loginButton = (
        <button type="button">
            <Link to={registerPath}>Register</Link>{" "}
        </button>
    );

    return (
        <main className="login-container">
            {hasInvalidCredentials === false ? (
                <Navigate to={arrivalProductsPath} />
            ) : (
                <>
                    {hasInvalidCredentials ? <p>Invalid Credentials</p> : null}
                    {logo}
                    {loginForm}
                    {loginButton}
                </>
            )}
        </main>
    );
}

export default Login;
