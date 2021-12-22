import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleEmail = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="Assets/sakura.png" alt="" />
            </div>
            <div className="right">
                <h2>&lt;Contact me&gt;</h2>
                <h3>Email: vuongvu1208@gmail.com</h3>
                <h3><a href="https://github.com/UnicornSaga" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></h3>
                <h3><a href="https://www.linkedin.com/in/vu-minh-vuong-334a82220/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></h3>
                <h3><a href="https://www.facebook.com/vu.minhvuong.58/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></h3>
            </div>
        </div>
    )
}
