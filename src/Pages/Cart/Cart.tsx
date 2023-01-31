import { Navigate } from "react-router-dom";
import { loginPath } from "../../paths/paths";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { productAddedToCart } from "../../store/slices/products-slice";

import { addToCartFromCartPage } from "../../store/slices/users-slice";

function Cart() {
  const users = useAppSelector((state) => state.users);
  const isLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

  const dispatch = useAppDispatch();

  const { loginStatus, usersList } = users;

  const { loggedInUser } = loginStatus;

  let indexOfUser = 0;

  usersList.findIndex((user, index) => {
    if (user.username === loggedInUser) {
      indexOfUser = index;
      return true;
    } else return null;
  });

  function add1toCartFromCart(loggedInUser: string, id: number, type: string) {
    dispatch(addToCartFromCartPage({ id, username: loggedInUser, type }));
    dispatch(productAddedToCart({ id, type }));
  }

  const cartOfUser = usersList[indexOfUser].cart;

  const mappedCartOfUser = cartOfUser.map((cartItem) => {
    return (
      <div key={cartItem.id}>
        <img src={cartItem.thumbnail} alt="thumbnail" />;<div>{cartItem.brand}</div>
        <div>
          {cartItem.colors} - {cartItem.sizes}
        </div>
        <div>{cartItem.price}</div>
        <button
          type="button"
          disabled={cartItem.quantityInCart === 5 ? true : false}
          onClick={() => add1toCartFromCart(loggedInUser, cartItem.id, "decrement")}
        >
          +
        </button>
        <div>{cartItem.quantityInCart}</div>
        <button
          type="button"
          onClick={() => add1toCartFromCart(loggedInUser, cartItem.id, "increment")}
          disabled={cartItem.quantityInCart === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  });

  return isLoggedIn ? <>{mappedCartOfUser}</> : <Navigate to={loginPath} />;
}

export default Cart;
