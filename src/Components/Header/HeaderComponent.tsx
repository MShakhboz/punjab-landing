import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import "./style.css";

const HeaderComponent = () => {
    const [isHomeActive, setIsHomeActive] = useState(true);
    const [isCategoriesActive, setIsCategoriesActive] = useState(false);
    const [isPPActive, setIsPP] = useState(false);
    const [isDirectedApp, setIsRedirectedApp] = useState(false);

    const [isClose, setIsClose] = useState(true);

    const handleHomeActive = () => {
        setIsHomeActive(true);
        setIsCategoriesActive(false);
        setIsPP(false);
        setIsRedirectedApp(false);
    };
    const handleCategoriesActive = () => {
        setIsHomeActive(false);
        setIsCategoriesActive(true);
        setIsPP(false);
        setIsRedirectedApp(false);
    };
    const handlePPActive = () => {
        setIsHomeActive(false);
        setIsCategoriesActive(false);
        setIsPP(true);
        setIsRedirectedApp(false);
    };
    const handleDirectedApp = () => {
        setIsHomeActive(false);
        setIsCategoriesActive(false);
        setIsPP(false);
        setIsRedirectedApp(true);
    };

    const hideMenu = () => {
        setIsClose(!isClose);
    };

    return (
        <header className="header-container">
            <div className="header-box">
                <div className="header-sub-box">
                    <div className="logo-box">
                        <img src={logo} alt="Logo" className="logo" />
                    </div>

                    <div className="navbar">
                        <ul
                            className={
                                !isClose
                                    ? "navbar-menu"
                                    : "navbar-menu hide-menu"
                            }
                        >
                            <li
                                className={isHomeActive ? "active" : undefined}
                                onClick={handleHomeActive}
                            >
                                Home
                            </li>
                            <li
                                className={
                                    isCategoriesActive ? "active" : undefined
                                }
                                onClick={handleCategoriesActive}
                            >
                                Categories
                            </li>
                            <li
                                className={isPPActive ? "active" : undefined}
                                onClick={handlePPActive}
                            >
                                Popular Products
                            </li>
                            <li
                                className={isDirectedApp ? "active" : undefined}
                                onClick={handleDirectedApp}
                            >
                                Our App
                            </li>
                        </ul>
                    </div>
                    <div className="menu-box" onClick={hideMenu}>
                        {isClose ? (
                            <FiMenu color="rgba(0, 0, 0, 1)" size={30} />
                        ) : (
                            <IoCloseSharp color="rgba(0, 0, 0, 1)" size={30} />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
