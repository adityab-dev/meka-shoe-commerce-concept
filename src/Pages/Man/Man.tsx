import { useAppSelector } from "../../store/hooks/hooks";
import { Navigate } from "react-router-dom";

import { loginPath } from "../../paths/paths";

function Man() {
    const isUserLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);
    return isUserLoggedIn === false ? <Navigate to={loginPath} /> : <div>Man</div>;
}

export default Man;
