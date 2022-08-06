/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

import HeaderComponent from "./Components/Header";
import MainSection from "./Screens/MainSection";
import FooterComponent from "./Components/Footer";

import comingSoon from "../src/assets/images/coming-soon.png";
import cellPhones from "../src/assets/images/modal-cellphones.png";

import "./App.css";

const customStyles = {
    content: {
        display: "flex",
    },
};

function App() {
    const [modalIsOpen, setIsOpen] = useState(true);

    // function openModal() {
    //     setIsOpen(true);
    // }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
            >
                <div>
                    <div className={"modalBackground"}>
                        <div className="comingsoon-container">
                            <div className="comingsoon-box">
                                <div className="comingsoon-logo-box">
                                    <img
                                        src={comingSoon}
                                        alt="coming soon modal"
                                        className="comingSoon-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={"title-box"}>
                                <p>COMING SOON</p>
                                <p>Online Grocery Service in the UK.</p>
                                <ul>
                                    <li>Fast Delivery</li>
                                    <li>Great Selection</li>
                                    <li>High Quality Products</li>
                                </ul>
                            </div>
                        </div>
                        <div className="closeIcone" onClick={closeModal}>
                            <IoCloseOutline color="#000000" size={30} />
                        </div>
                        <div className="cellPhoneBox">
                            <img
                                src={cellPhones}
                                alt="cell phone"
                                className="image-cellphone"
                            />
                        </div>
                    </div>
                </div>
            </Modal>
            <HeaderComponent />
            <MainSection />
            <FooterComponent />
        </>
    );
}

export default App;
