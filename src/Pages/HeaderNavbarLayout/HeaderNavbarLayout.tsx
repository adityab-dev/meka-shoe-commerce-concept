import { Outlet } from "react-router-dom";

import MainNavigationHeader from "../../Components/MainNavigationHeader/MainNavigationHeader";

function HeaderNavbarLayout() {
    return (
        <header>
            <MainNavigationHeader />
            <Outlet />
        </header>
    );
}

export default HeaderNavbarLayout;
