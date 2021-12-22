import React from "react";
import "./portfolio.scss";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container1">
                <h2>&lt;About&gt;</h2>
                <h3>Hi! I am Minh Vuong and this is my portfolio Website.</h3>
            </div>
            <div className="container2">
                <h3>
                    I'm a Second Year Student major in Computer Science with a burning passion of discovering new Technology.
                    I always try to come up with new projects that can actually help people in real life.
                </h3>
                <h3>
                    - Programming Language: 
                    <ul>
                        <li>Java (Intermediate)</li>
                        <li>C++ (Intermediate)</li>
                        <li>Python (Beginner)</li>
                        <li>HTML / CSS (Beginner)</li>
                    </ul>
                    - Framework: React / Bootstrap / SASS
                </h3>
                <h3>- Languages: Vietnamese, Conversational and Work Proficiency in English</h3>
                <h3>- Interests: Mixology, Stock Trading, Work Out</h3>
            </div>
            <hr />
        </div>
    )
}
