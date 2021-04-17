import CallPageHeader from "../HomePage/UI/CallPageHeader/CallpageHeader";
import CallPageFooter from "../HomePage/UI/CallPageFooter/CallPageFooter";
import MeetingInfo from "../HomePage/UI/MeetingInfo/MeetingInfo";
import Messanger from "../HomePage/UI/Messanger/Messanger";
import "./CallPage.scss";

function CallPage() {
    return (
        <div className="callpage-container">
            <video src="" className="video-container" controls></video>
            <CallPageHeader />
            <CallPageFooter />
            <MeetingInfo />
            <Messanger />
        </div>
    )
}

export default CallPage
