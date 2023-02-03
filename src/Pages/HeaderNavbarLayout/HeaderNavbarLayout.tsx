import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/hooks";

import { loginPath } from "../../paths/paths";

import MainNavigationHeader from "../../Components/MainNavigationHeader/MainNavigationHeader";

import Footer from "../../Components/Footer/Footer";
import Offer from "../../Components/Offer/Offer";

import "./HeaderNavbarLayout.css";

function HeaderNavbarLayout() {
  const isUserLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

  const layout = (
    <>
      <MainNavigationHeader />
      <Outlet />
      <Offer />
      <Footer />
    </>
  );

  return (
    <header className="headerLayout-header">
      {isUserLoggedIn === false ? <Navigate to={loginPath} /> : layout}
    </header>
  );
}

export default HeaderNavbarLayout;
