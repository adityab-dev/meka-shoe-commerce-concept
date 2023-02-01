import "./Footer.css";

import footer_partner_1_src from "../../Assets/footer-partner-1.png";
import footer_partner_2_src from "../../Assets/footer-partner-2.png";

import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";

export default function Footer() {
  const footerLinks = (
    <div className="footer-links">
      <div>About Us</div>
      <div>Blogs</div>
      <div>Contact Us</div>
      <div>Store</div>
    </div>
  );

  const footerPartners = (
    <div className="footer-partners">
      <p>Partners</p>
      <div className="footer-partners-img">
        <div className="footer-partners-img-container">
          <img src={footer_partner_1_src} alt="partner" />
        </div>
        <div className="footer-partners-img-container">
          <img src={footer_partner_2_src} alt="partner" />
        </div>
      </div>
    </div>
  );

  const footerReach = (
    <div className="footer-reach">
      <div className="footer-reach-description">stay connected with us</div>
      <input type="text" placeholder="Enter Your Email" />
      <button>Subscribe</button>

      <div className="footer-reach-sites">
        <AiOutlineInstagram />
        <VscTwitter />
        <AiFillFacebook />
      </div>
    </div>
  );

  return (
    <div className="footer-container">
      <div className="footer-container-center">
        {footerLinks}
        {footerPartners}
        {footerReach}
      </div>
    </div>
  );
}
