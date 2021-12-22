import React from "react";
import "./work.scss";

export default function Work() {
    return (
        <div className="work" id="work">
            <h1>&lt;Projects&gt;</h1>
            <ul>
                <li>Dictionary</li>
                <li>Fitness App</li>
                <li>Stock Trader Bot</li>
            </ul>
            <div className="container">
                <a className="item" href="https://github.com/negomi/react-burger-menu#styling" target="_blank">
                    <img src="Assets/tmpProj1.jpg" alt="" />
                    <h3>Dictionary App</h3>
                </a>
                <a className="item" href="https://github.com/negomi/react-burger-menu#styling" target="_blank">
                    <img src="Assets/tmpProj2.jpg" alt="" />
                    <h3>Fitness App</h3>
                </a>
                <a className="item" href="https://github.com/negomi/react-burger-menu#styling" target="_blank">
                    <img src="Assets/tmpProj3.jpg" alt="" />
                    <h3>Stock Trader Bot</h3>
                </a>
            </div>
            <hr />
        </div>
    )
}
