import footerLogo from "../../assets/images/footer-logo.png";
import appleLogo from "../../assets/images/apple-icon.png";
import googleLogo from "../../assets/images/google-icon.png";
import twitter from "../../assets/images/twitter-icon.png";
import facebook from "../../assets/images/facebook-icon.png";

import "./style.css";

const FooterComponent = () => {
    return (
        <footer className="footer-container">
            <div className="footer-box-cont">
                <div className="footer-box">
                    <div className="footer-box-sub">
                        <div>
                            <div>
                                <img src={footerLogo} alt="Footer Logo" />
                            </div>
                            <div className="social-box">
                                <img src={appleLogo} alt="Apple Logo" />
                                <img src={googleLogo} alt="Google Logo" />
                                <img src={twitter} alt="twitter" />
                                <img src={facebook} alt="facebook" />
                            </div>
                        </div>
                        <div className="footer-info-box">
                            <div className="footer-title">About</div>
                            <ul>
                                <li>How it Work</li>
                                <li>Our Packages</li>
                                <li>Promotions</li>
                                <li>Refer A Friend</li>
                            </ul>
                        </div>
                        <div className="footer-info-box">
                            <div className="footer-title">Delivery</div>
                            <ul>
                                <li>Cost Of Delivery</li>
                                <li>Payment Method</li>
                                <li>Delivery Areas</li>
                                <li>Returns</li>
                            </ul>
                        </div>
                        <div className="footer-info-box">
                            <div className="footer-title">Contact</div>
                            <ul>
                                <li>Custom, Chhatak 216/c East Road</li>
                                <li>egrocery@gmail.com</li>
                                <li>+8801710000000</li>
                                <li style={{ visibility: "hidden" }}>
                                    Telephone number
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
