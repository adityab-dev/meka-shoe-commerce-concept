import { Navigate } from "react-router-dom";
import { loginPath } from "../../paths/paths";

import { useAppSelector } from "../../store/hooks/hooks";

import CartPriceDetails from "../../Components/CartPriceDetails/CartPriceDetails";
import CartLayout from "../../Components/CartLayout/CartLayout";
import CartItemList from "../../Components/CartItemsList/CartItemsList";

import "./Cart.css";

function Cart() {
  const isLoggedIn = useAppSelector(
    (state) => state.users.loginStatus.isLoggedIn
  );

  return isLoggedIn ? (
    <>
      <h1 className="cart-red-font-color" style={{ textIndent: "1rem" }}>
        My Cart
      </h1>
      <div className="cart-content">
        <div className="cart-content-left">
          <CartLayout />
          <CartItemList />
        </div>
        <div className="cart-content-right cart-dak-maroon-bg">
          <CartPriceDetails />
        </div>
      </div>
    </>
  ) : (
    <Navigate to={loginPath} />
  );
}

export default Cart;
