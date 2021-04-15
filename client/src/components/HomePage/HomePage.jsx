import "./HomePage.scss";
import Header from "./UI/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import video from "../../Assets/production ID_4255065.mp4";

function HomePage() {
    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Preminum video meeting now free for everyone!</h2>
                        <p>Always connect with your loved one and move forward with our software. I hope you will enjoy this shit😎.</p>
                        <div className="action-btn">
                            <button className="btn make-call">
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                New Meeting
                            </button>
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                    <input type="text" placeholder="Enter a code link" />
                                </div>
                                <button className="btn no-bg">Join</button>
                            </div>
                        </div>

                        <div className="help-text">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Learn more</a>
                            <span>About our awesome Software</span>
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="content">
                        <video className="video-tag" loop autoPlay >
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
