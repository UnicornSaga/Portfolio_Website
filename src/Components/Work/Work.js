import React from "react";
import "./work.scss";

export default function Work() {
    return (
        <div className="work" id="work">
            <h1>&lt;Projects&gt;</h1>
            <div className="container">
                <a className="item" href="https://github.com/UnicornSaga/Dictionary-App" target="_blank">
                    <img src="Assets/tmpProj1.jpg" alt="" />
                    <h3>Dictionary App</h3>
                </a>
                <a className="item" href="https://github.com/UnicornSaga/Employee_Management" target="_blank">
                    <img src="Assets/tmpProj2.jpg" alt="" />
                    <h3>Employee Management App</h3>
                </a>
                <a className="item" href="https://github.com/UnicornSaga/CryptoBot" target="_blank">
                    <img src="Assets/tmpProj3.jpg" alt="" />
                    <h3>Crypto Trading Bot</h3>
                </a>
            </div>
        </div>
    )
}
