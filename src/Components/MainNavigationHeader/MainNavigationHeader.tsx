import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import { arrivalProductsPath, manProductsPath, womanProductPaths, cartPath } from "../../paths/paths";

import { logout } from "../../store/slices/users-slice";

function MainNavigationHeader() {
    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(logout());
    }

    // currently logs out in 1 min
    useEffect(() => {
        // 10 mins
        const delay_ms = 600000;

        setTimeout(() => {
            dispatch(logout());
        }, delay_ms);
    }, [dispatch]);

    const Logo = <img src={undefined} alt="logo" />;

    const NavList = (
        <ul>
            <li>
                <Link to={arrivalProductsPath}>New Arrival</Link>
            </li>
            <li>
                <Link to={manProductsPath}>Man</Link>
            </li>
            <li>
                <Link to={womanProductPaths}>Woman</Link>
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
        <nav>
            {Logo}
            {NavList}
            {HeaderSearchInput}
            {HeaderHamburder}
            {logoutButton}
        </nav>
    );
}

export default MainNavigationHeader;
