import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faTimes, faUser, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import "./MeetingInfo.scss"


function MeetingInfo({ setMeetingInfoPopup, url }) {
    return (
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h3>Your meeting's ready</h3>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
                    setMeetingInfoPopup(false);
                }} />
            </div>
            <button className="add-people-btn">
                <FontAwesomeIcon className="icon" icon={faUser} />
                Add Other
            </button>
            <p className="info-text">
                Or share this meeting link with others you want in the meeting
            </p>
            <div className="meet-link">
                <span>{url}</span>
                <FontAwesomeIcon className="icon" icon={faCopy} onClick={() => {
                    navigator.clipboard.writeText(url).then(() => {
                        alert(`${url} is copied to clipboard!`);
                    });
                }} />
            </div>
            <div className="permission-text">
                <FontAwesomeIcon className="icon" icon={faShieldAlt} />
                <p className="small-text">
                    People who use this meeting link must get your permission before they can join.
                </p>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid rgba(0,0,0,0.2)", marginBottom: "10px" }} />
            <p className="small-text">
                Joined as example123@gmail.com
            </p>
        </div>
    )
}

export default MeetingInfo
