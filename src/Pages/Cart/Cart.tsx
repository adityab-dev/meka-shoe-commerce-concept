import { Navigate } from "react-router-dom";
import { loginPath } from "../../paths/paths";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { productAddedToCart } from "../../store/slices/products-slice";

import { addToCartFromCartPage } from "../../store/slices/users-slice";

import "./Cart.css";

import partner_1_src from "../../Assets/footer-partner-1.png";
import partner_2_src from "../../Assets/footer-partner-2.png";

function Cart() {
  const users = useAppSelector((state) => state.users);
  const isLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

  const dispatch = useAppDispatch();

  const { loginStatus, usersList } = users;

  const { loggedInUser } = loginStatus;

  let indexOfUser = 0;

  indexOfUser = usersList.findIndex((user) => user.username === loggedInUser);

  let totalPrice = 0;

  totalPrice = usersList[indexOfUser].totalPrice;

  function add1toCartFromCart(loggedInUser: string, id: number, type: string) {
    dispatch(addToCartFromCartPage({ id, username: loggedInUser, type }));
    dispatch(productAddedToCart({ id, type }));
  }

  const cartOfUser = usersList[indexOfUser].cart;

  const mappedCartOfUser = cartOfUser.map((cartItem) => {
    // return (
    //   <div key={cartItem.id}>
    //     <img src={cartItem.thumbnail} alt="thumbnail" />;<div>{cartItem.brand}</div>
    //     <div>
    //       {cartItem.colors} - {cartItem.sizes}
    //     </div>
    //     <div>{cartItem.price}</div>
    //     <button
    //       type="button"
    //       disabled={cartItem.quantityInCart === 5 ? true : false}
    //       onClick={() => add1toCartFromCart(loggedInUser, cartItem.id, "decrement")}
    //     >
    //       +
    //     </button>
    //     <div>{cartItem.quantityInCart}</div>
    //     <button
    //       type="button"
    //       onClick={() => add1toCartFromCart(loggedInUser, cartItem.id, "increment")}
    //       disabled={cartItem.quantityInCart === 0 ? true : false}
    //     >
    //       -
    //     </button>
    //   </div>
    // );

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
              onClick={() => add1toCartFromCart(loggedInUser, cartItem.id, "increment")}
              type="button"
              className="cart-light-red-bg color-white"
            >
              -
            </button>
            <div className="cart-itemQuantity-font-size color-white">{cartItem.quantityInCart}</div>
            <button
              type="button"
              className={`cart-light-red-bg color-white ${
                cartItem.quantityInCart === 5 ? "disabled-btn" : ""
              }`}
              onClick={() => {
                add1toCartFromCart(loggedInUser, cartItem.id, "decrement");
                console.log("clicked");
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

  // const productDetails = (
  //   <div className="product-details-container cart-dark-maroon-bg color-white border-bottom">
  //     <div className="product-details-product">
  //       <img src={undefined} alt="product" />
  //       <div>
  //         <div className="company-name-font-size ">Company Name</div>
  //         <div className="product-name-font-size ">Product Name</div>
  //         <div className="price-font-size ">Price</div>
  //       </div>
  //     </div>

  //     <div className="cart-cartQuantity text-center">
  //       <button type="button" className="cart-light-red-bg color-white">
  //         -
  //       </button>
  //       <div className="cart-itemQuantity-font-size color-white">0</div>
  //       <button type="button" className="cart-light-red-bg color-white">
  //         +
  //       </button>
  //     </div>

  //     <div className="price-font-size text-right cart-totalAmunt">Price * times</div>
  //   </div>
  // );

  const cartLayout = (
    <div className="cart-product-info-center cart-dark-red-bg">
      <div className="cart-product-info">
        <div className="">Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-right ">Total</div>
      </div>
    </div>
  );

  const cartPriceDetails = (
    <div className="cart-price-width-center cart-dark-maroon-bg">
      <div className="cart-price-width flex-column  color-white">
        <div className="cart-cartPrice-item">
          <div className="cart-price-big-font">Sub Total</div>
          <div className="cart-price-small-font">${totalPrice}</div>
        </div>

        <div className="cart-cartPrice-item border-bottom">
          <div className="cart-price-big-font">VAT</div>
          <div className="cart-price-small-font">0.00</div>
        </div>

        <div className="cart-cartPrice-item">
          <div className="cart-price-big-font" style={{ marginBottom: ".75rem" }}>
            Total
          </div>
          <div className="cart-price-small-font">${totalPrice}</div>
        </div>

        <div className="cart-price-small-font">Payment</div>

        <div className="cart-cartPrice-item cart-cartPrice-imgs-center">
          <div className="cart-cartPrice-imgs">
            <div className="empty-white-divs">
              <img src={partner_1_src} alt="partner" className="cart-cartPrice-img-1" />
            </div>
            <div className="empty-white-divs">
              <img src={partner_2_src} alt="partner" className="cart-cartPrice-img-2" />
            </div>
          </div>
        </div>
        <div className="cart-price-btn-container">
          <button type="button" className="cart-red-font-color">
            Cash On Delivery
          </button>
        </div>
      </div>
    </div>
  );

  return isLoggedIn ? (
    <>
      <h1 className="cart-red-font-color" style={{ textIndent: "1rem" }}>
        My Cart
      </h1>
      <div className="cart-content">
        <div className="cart-content-left">
          {cartLayout}
          {mappedCartOfUser}
          {/* {productDetails} */}
        </div>
        <div className="cart-content-right cart-dak-maroon-bg">{cartPriceDetails}</div>
      </div>
    </>
  ) : (
    <Navigate to={loginPath} />
  );
}

export default Cart;
