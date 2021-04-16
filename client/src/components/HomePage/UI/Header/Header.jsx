import React from 'react';
import "./Header.scss";
import logo from "../../../../Assets/video-call.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faExclamationCircle, faCog } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <nav className="nav">
            <div className="logo">
                <img className="logo-img" src={logo} alt="logo" />
                <span className="help-text">Make <span style={{ fontWeight: "600", color: "#7c7c7c" }}>Call</span></span>
            </div>
            <div className="action-btn">
                <FontAwesomeIcon onClick={() => alert("This thing is not ready yet👻")} className="icon-block" icon={faQuestionCircle} />
                <FontAwesomeIcon onClick={() => alert("And this one also💩")} className="icon-block" icon={faExclamationCircle} />
                <FontAwesomeIcon onClick={() => alert("Ohh! I didn't tell you this one also do nothing😈")} className="icon-block" icon={faCog} />
            </div>
        </nav>
    )
}

export default Header
