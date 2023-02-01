import "./Offer.css";

import footer_partner1 from "../../Assets/footer-partner-1.png";
import footer_partner2 from "../../Assets/footer-partner-2.png";
import offer_shoes from "../../Assets/offer-shoes.png";

export default function Offer() {
  const contentLeft = (
    <div className="offer-content-left ">
      <p className="remove-margin discount common-padding-offer-left">Get 20% cash back</p>
      <p className="common-font-size remove-margin validity common-padding-offer-left">
        only valid till Feb 20
      </p>
      <div>
        <div className="offer-via-imgs">
          <p className="common-font-size remove-margin common-padding-offer-left via">Via</p>
          <div className="offer-partner-img-container">
            <img src={footer_partner1} alt="partners" className="offer-partner-img" />
            <img src={footer_partner2} alt="partners" className="offer-partner-img" />
          </div>
        </div>
      </div>
      <p className="common-font-size remove-margin common-padding-offer-left delivery">
        Free Delivery
      </p>
      <button type="button" className="common-font-size remove-padding common-padding-offer-left">
        Shop Now
      </button>
    </div>
  );

  const contentRight = <img className="offer-content-right" src={offer_shoes} alt="partners" />;

  return (
    <div className="offer-container">
      <div className="offer-container-center">
        {contentLeft}
        {contentRight}
      </div>
    </div>
  );
}
