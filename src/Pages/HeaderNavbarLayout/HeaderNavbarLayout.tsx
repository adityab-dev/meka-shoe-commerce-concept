import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";

import { loginPath } from "../../paths/paths";

import MainNavigationHeader from "../../Components/MainNavigationHeader/MainNavigationHeader";

function HeaderNavbarLayout() {
    const isUserLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);
    return (
        <header>
            {isUserLoggedIn === false ? (
                <Navigate to={loginPath} />
            ) : (
                <>
                    <MainNavigationHeader />
                    <Outlet />
                </>
            )}
        </header>
    );
}

export default HeaderNavbarLayout;
