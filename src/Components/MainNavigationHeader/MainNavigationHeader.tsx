import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import logo from '../../Assets/logo.png'

import {
  arrivalProductsPath,
  manProductsPath,
  womanProductPaths,
  cartPath,
} from "../../paths/paths";

import { logout } from "../../store/slices/users-slice";

import { resetFilters } from "../../store/slices/products-slice";

import './MainNavigationHeader.css'

function MainNavigationHeader() {
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(logout());
    dispatch(resetFilters());
  }

  function onPageChange() {
    dispatch(resetFilters());
  }

  // currently logs out in 10 min
  useEffect(() => {
    // 10 mins
    const delay_ms = 6000000;

    setTimeout(() => {
      dispatch(logout());
    }, delay_ms);
  }, [dispatch]);

  const Logo = <img src={logo} alt="logo" />;

  const NavList = (
    <ul className="navHeader-navList">
      <li>
        <Link to={arrivalProductsPath} onClick={onPageChange}>
          New Arrival
        </Link>
      </li>
      <li>
        <Link to={manProductsPath} onClick={onPageChange}>
          Man
        </Link>
      </li>
      <li>
        <Link to={womanProductPaths} onClick={onPageChange}>
          Woman
        </Link>
      </li>
      <li>
        <Link to={cartPath}>Cart</Link>
      </li>
    </ul>
  );

  const HeaderSearchInput = <input type="text" placeholder="search" />;

  const HeaderHamburder = <GiHamburgerMenu />;

  const logoutButton = (
    <button type="button" onClick={logoutHandler}>
      Logout
    </button>
  );

  return (
    <nav className="navheader-navbar">
      {Logo}
      {NavList}
      {HeaderSearchInput}
      {HeaderHamburder}
      {logoutButton}
    </nav>
  );
}

export default MainNavigationHeader;
