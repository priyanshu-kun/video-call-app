import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faCommentAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "./CallpageHeader.scss"

function CallpageHeader() {
    return (
        <div className="frame-header">
            <div className="header-items icon-block">
                <div className="header-items icon-block">
                    <FontAwesomeIcon className="icon friends" icon={faUserFriends} />
                </div>
                <div className="header-items icon-block">
                    <FontAwesomeIcon className="icon comment" icon={faCommentAlt} />
                    <span className="alert-circle-icon"></span>
                </div>
                <div className="header-items date-block">1:00 pm</div>
                <div className="header-items icon-block">
                    <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
                </div>
            </div>
        </div >
    )
}

export default CallpageHeader
