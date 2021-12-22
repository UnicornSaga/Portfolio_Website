import React from "react";
import "./topbar.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {slide as Menu} from "react-burger-menu";


export default function Topbar() {
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
      
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Vuong.About()</a>
                </div>
                <div className="right">
                    <a href="#portfolio" className="menuBar">&lt;About&gt;</a>
                    <a href="#work" className="menuBar">&lt;Projects&gt;</a>
                    <a href="#contact" className="menuBar">&lt;Contact&gt;</a>
                    <a href="https://github.com/UnicornSaga" target="_blank" className="menuBar"><FontAwesomeIcon icon={faGithub} className="icon"/></a>
                    <a href="https://www.linkedin.com/in/vu-minh-vuong-334a82220/" target="_blank" className="menuBar"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
                </div>
            </div>
        </div>
    )
}
