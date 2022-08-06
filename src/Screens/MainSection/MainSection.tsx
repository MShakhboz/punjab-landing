import cellPhone from "../../assets/images/main-cellphone.png";
import arrow from "../../assets/images/arrow.png";
import fish from "../../assets/images/fish.png";
import vegetables from "../../assets/images/vegetables.png";
import medicine from "../../assets/images/medicine.png";
import baby from "../../assets/images/baby.png";
import office from "../../assets/images/office.png";
import beauty from "../../assets/images/beauty.png";
import gardening from "../../assets/images/gardening.png";
import button from "../../assets/images/button.png";
import cabbage from "../../assets/images/cabbage.png";
import icecream from "../../assets/images/icecream.png";
import potato from "../../assets/images/potato.png";
import bundlePuck from "../../assets/images/bundle-pack.png";
import oreo from "../../assets/images/oreo.png";
import papaya from "../../assets/images/papaya.png";
import playSote from "../../assets/images/play-store.png";
import appStore from "../../assets/images/app-store.png";
import cellFooter from "../../assets/images/cell-prefooter.png";
import "./style.css";
import BoxComponent from "./BoxComponent";

const MainSection = () => {
    return (
        <>
            {/* Main Section */}
            <section className="main-section">
                <div className="main-section-box">
                    <div className="cell-phone-box">
                        <img src={cellPhone} alt="Cell phone" />
                    </div>
                </div>
            </section>

            {/* Category */}
            <section className="product-section">
                <div className="product-section-box">
                    <div className="carousel-box">
                        <div className="carousel-box-title">
                            <p className="carousel-title">Categories</p>
                        </div>
                        <div className="carousel-box-arrows">
                            <img src={arrow} alt="Arrow" />
                        </div>
                    </div>
                    <div className="products-box">
                        <img src={fish} alt="fish" />
                        <img src={vegetables} alt="vegetables" />
                        <img src={medicine} alt="medicine" />
                        <img src={baby} alt="baby" />
                        <img src={office} alt="office" />
                        <img src={beauty} alt="beauty" />
                        <img src={gardening} alt="product" />
                    </div>
                </div>
            </section>

            {/* Popular Products */}
            <section className="pps-section">
                <div className="pps-section-box">
                    <div className="pps-section-container">
                        <div className="pps-title">
                            <p>Popular Products</p>
                            <img src={button} alt="button" />
                        </div>
                        <div className="product-box">
                            <BoxComponent
                                image={<img src={cabbage} alt="cabbage" />}
                                nameProduct={"Cabbage"}
                            />
                            <BoxComponent
                                image={<img src={icecream} alt="Icecream" />}
                                nameProduct={"Icecream"}
                            />
                            <BoxComponent
                                image={<img src={potato} alt="Potato" />}
                                nameProduct={"Potato"}
                            />
                        </div>
                        <div className="product-box">
                            <BoxComponent
                                image={
                                    <img src={bundlePuck} alt="Bundle Puck" />
                                }
                                nameProduct={"Bundle Puck"}
                            />
                            <BoxComponent
                                image={<img src={oreo} alt="Oreo" />}
                                nameProduct={"Oreo"}
                            />
                            <BoxComponent
                                image={<img src={papaya} alt="Papaya" />}
                                nameProduct={"Papaya"}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Download App */}
            <section className="prefooter-section">
                <div className="prefooter-sectio-container">
                    <div className="prefootet-section-container">
                        <div className="content-box">
                            <div>
                                <div className="prefooter-description">
                                    <p>Download App</p>
                                </div>
                                <div className="store-box">
                                    <img
                                        src={appStore}
                                        alt="Button to app store"
                                    />
                                    <img
                                        src={playSote}
                                        alt="Button to play store"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="cell-footer">
                            <img
                                src={cellFooter}
                                alt="cell phone"
                                className="mobile-dimension"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainSection;
