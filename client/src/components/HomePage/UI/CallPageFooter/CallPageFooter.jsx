import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone, faPhone, faAngleUp, faClosedCaptioning, faDesktop, faMicrophoneSlash, faVideo } from '@fortawesome/free-solid-svg-icons'
import "./CallPageFooter.scss"

function CallPageFooter() {
    return (
        <div className="footer-item">
            <div className="left-item">
                <div className="icon-block">
                    Meeting details
                    <FontAwesomeIcon className="icon" icon={faAngleUp} />
                </div>
            </div>
            <div className="center-item">
                <div className="icon-block">
                    <FontAwesomeIcon className="icon" icon={faMicrophone} />
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faPhone} />
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon" icon={faVideo} />
                </div>
            </div>
            <div className="right-item">
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
                    <p className="title">Turn on caption</p>
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faDesktop} />
                    <p className="title">present now</p>
                </div>
            </div>
        </div>
    )
}

export default CallPageFooter;
