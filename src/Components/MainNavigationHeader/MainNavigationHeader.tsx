import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import {
    arrivalProductsPath,
    manProductsPath,
    womanProductPaths,
    cartPath,
} from "../../paths/paths";

function MainNavigationHeader() {
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

    const HeaderSearchInput = (
        <input type="text" placeholder="search" />
    );

    const HeaderHamburder = <GiHamburgerMenu />;

    return (
        <nav>
            {Logo}
            {NavList}
            {HeaderSearchInput}
            {HeaderHamburder}
        </nav>
    );
}

export default MainNavigationHeader;
