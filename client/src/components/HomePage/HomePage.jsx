import "./HomePage.scss";
import Header from "./UI/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faKeyboard } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Preminum video meeting now free for everyone!</h2>
                        <p>Always connect with your loved one and move forward with our software. I hope you will enjoy this shit😎 and one more thing, Our Software never sell customer data and spy on peoples😌</p>
                        <div className="action-btn">
                            <button className="btn make-call">
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                Start new Meeting
                            </button>
                        </div>
                        <div className="input-block">
                            <div className="input-section">
                                <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                <input type="text" placeholder="Enter a code link" />
                            </div>
                            <button className="btn no-bg">Join</button>
                        </div>
                        <div className="help-text">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Learn more</a>
                            about our awesome Software
                        </div>
                    </div>
                </div>
                <div className="right-side"></div>
            </div>
        </div>
    )
}

export default HomePage
