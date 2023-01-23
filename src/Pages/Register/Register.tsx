import { Link, Form } from "react-router-dom";

import { loginPath } from "../../paths/paths";

function Register() {
    const logo = <img src={undefined} alt="logo" />;

    const registerForm = (
        <Form method="post">
            <input type="text" placeholder="username/email" />
            <input type="text" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <button type="submit">Signup</button>
        </Form>
    );

    const signUpButton = (
        <button type="submit">
            <Link to={loginPath}>Sign In</Link>
        </button>
    );

    return (
        <main>
            {logo}
            {registerForm}
            {signUpButton}
        </main>
    );
}

export default Register;
