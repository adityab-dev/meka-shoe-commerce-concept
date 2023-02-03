import { useAppSelector } from "../../store/hooks/hooks";

import partner_1_src from "../../Assets/footer-partner-1.png";
import partner_2_src from "../../Assets/footer-partner-2.png";

function CartPriceDetails() {
  const users = useAppSelector((state) => state.users);

  const { loginStatus, usersList } = users;

  const { loggedInUser } = loginStatus;

  let indexOfUser = 0;

  indexOfUser = usersList.findIndex((user) => user.username === loggedInUser);

  let totalPrice = 0;

  totalPrice = usersList[indexOfUser].totalPrice;

  return (
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
          <div
            className="cart-price-big-font"
            style={{ marginBottom: ".75rem" }}
          >
            Total
          </div>
          <div className="cart-price-small-font">${totalPrice}</div>
        </div>

        <div className="cart-price-small-font">Payment</div>

        <div className="cart-cartPrice-item cart-cartPrice-imgs-center">
          <div className="cart-cartPrice-imgs">
            <div className="empty-white-divs">
              <img
                src={partner_1_src}
                alt="partner"
                className="cart-cartPrice-img-1"
              />
            </div>
            <div className="empty-white-divs">
              <img
                src={partner_2_src}
                alt="partner"
                className="cart-cartPrice-img-2"
              />
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
}

export default CartPriceDetails;
