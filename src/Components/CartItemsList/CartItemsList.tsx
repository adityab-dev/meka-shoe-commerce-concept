import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { productAddedToCart } from "../../store/slices/products-slice";
import {
  cartInteraction,
  CartInteractionPayload,
} from "../../store/slices/users-slice";

function CartItemList() {
  const users = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  const { loginStatus, usersList } = users;

  const { loggedInUser } = loginStatus;

  let indexOfUser = 0;

  indexOfUser = usersList.findIndex((user) => user.username === loggedInUser);

  function interactwithCartFromCart(parameters: CartInteractionPayload) {
    const { id, type } = parameters;

    dispatch(cartInteraction(parameters));
    dispatch(productAddedToCart({ id, type }));
  }

  const cartOfUser = usersList[indexOfUser].cart;

  const cartItemsList = cartOfUser.map((cartItem) => {
    return (
      <div
        className="product-details-container-center cart-dark-maroon-bg border-bottom"
        key={cartItem.id}
      >
        <div className="product-details-container color-white">
          <div className="product-details-product">
            <img src={cartItem.thumbnail} alt="product" />
            <div className="product-details-rightofImage">
              <div className="company-name-font-size ">{cartItem.brand}</div>
              <div className="product-name-font-size ">{cartItem.title}</div>
              <div className="price-font-size ">${cartItem.price}</div>
            </div>
          </div>

          <div className="cart-cartQuantity text-center">
            <button
              onClick={() =>
                interactwithCartFromCart({
                  ...cartItem,
                  type: "increment",
                  username: loggedInUser,
                })
              }
              type="button"
              className="cart-light-red-bg color-white"
            >
              -
            </button>
            <div className="cart-itemQuantity-font-size color-white">
              {cartItem.quantityInCart}
            </div>
            <button
              type="button"
              className={`cart-light-red-bg color-white ${
                cartItem.quantityInCart === 5 ? "disabled-btn" : ""
              }`}
              onClick={() => {
                interactwithCartFromCart({
                  ...cartItem,
                  username: loggedInUser,
                  type: "decrement",
                });
              }}
            >
              +
            </button>
          </div>

          <div className="price-font-size text-right cart-totalAmunt">
            ${+cartItem.price * cartItem.quantityInCart}
          </div>
        </div>
      </div>
    );
  });

  return <>{cartItemsList}</>;
}

export default CartItemList;
