import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";

import { loginPath } from "../../paths/paths";

import MainNavigationHeader from "../../Components/MainNavigationHeader/MainNavigationHeader";

import "./HeaderNavbarLayout.css";
import Footer from "../../Components/Footer/Footer";
import Offer from "../../Components/Offer/Offer";

function HeaderNavbarLayout() {
  const isUserLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

  return (
    <header className="headerLayout-header">
      {isUserLoggedIn === false ? (
        <Navigate to={loginPath} />
      ) : (
        <>
          <MainNavigationHeader />
          <Outlet />
          <Offer />
          <Footer />
        </>
      )}
    </header>
  );
}

export default HeaderNavbarLayout;
