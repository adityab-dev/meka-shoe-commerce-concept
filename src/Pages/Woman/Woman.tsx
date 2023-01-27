import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";

import { loginPath } from "../../paths/paths";

function Woman() {
    const isUserLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

    return <>{isUserLoggedIn === false ? <Navigate to={loginPath} /> : <div>Woman</div>}</>;
}

export default Woman;
