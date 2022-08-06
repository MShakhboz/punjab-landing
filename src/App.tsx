/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

import HeaderComponent from "./Components/Header";
import MainSection from "./Screens/MainSection";
import FooterComponent from "./Components/Footer";

import modalImage from "../src/assets/images/modal.png";
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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div style={{ position: "relative" }}>
                        <img
                            src={modalImage}
                            alt="modal image"
                            className="modal-content"
                        />
                    </div>

                    <div className="closeIcone" onClick={closeModal}>
                        <IoCloseOutline color="#fff" size={50} />
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
