import {React, useRef, useEffect} from "react";
import {init} from "ityped";
import "./intro.scss";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true, backDelay: 1500, backSpeed: 50, strings: ["Hi, I'm Minh Vuong!", "Vietnam National University student", "Computer Science Major"] })
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="Assets/picsart.jpeg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2><span ref={textRef}></span></h2>
                    <h3>Student at University of Engineering and Technology (Vietnam National University)</h3>
                </div>
            </div>
        </div>
    )
}
