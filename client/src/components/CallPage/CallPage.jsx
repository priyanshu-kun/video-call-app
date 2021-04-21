import CallPageHeader from "../HomePage/UI/CallPageHeader/CallpageHeader";
import CallPageFooter from "../HomePage/UI/CallPageFooter/CallPageFooter";
import MeetingInfo from "../HomePage/UI/MeetingInfo/MeetingInfo";
import Messanger from "../HomePage/UI/Messanger/Messanger";
import MessageListReducer from "./../../reducer/messageListReducer";
import { getRequest, postRequest } from "./../../utils/apiRequest";
import { baseURL, GET_CALL_ID, SAVE_CALL_ID } from "./../../utils/apiEndpoints";
import { io } from "socket.io-client";
import "./CallPage.scss";
import { useEffect, useState, useReducer } from "react";
import { useParams, useHistory } from "react-router-dom";
import Peer from "simple-peer";

// const initialState = [];
// let peer = null;
const socket = io.connect('http://localhost:3000', { reconnect: true });

function CallPage() {
    // let { id } = useParams();
    // // eslint-disable-next-line
    // const history = useHistory();
    const isAdmin = window.location.hash === "#init" ? true : false;
    const url = `${window.location.origin}${window.location.pathname}`;
    const [meetingInfoPopup, setMeetingInfoPopup] = useState(false);
    // eslint-disable-next-line
    // const [state, dispatch] = useReducer(MessageListReducer, initialState);
    // // eslint-disable-next-line
    // const [streamObj, setStreamObj] = useState();
    // // eslint-disable-next-line
    // const [screenCastStream, setScreenCastStream] = useState();
    // // eslint-disable-next-line
    // const [isPresenting, setIsPresenting] = useState(false);
    // // eslint-disable-next-line
    // const [isMessanger, setIsMessanger] = useState(false);
    // // eslint-disable-next-line
    // const [messageAlert, setMessageAlert] = useState({});
    // // eslint-disable-next-line
    // const [isAudio, setIsAudio] = useState(true);


    useEffect(() => {
        if (isAdmin) {
            setMeetingInfoPopup(true);
        }
        initWebRTC();
        // socket.on("code", (data) => {
        //     peer.signal(data)
        // })
        // eslint-disable-next-line
    }, [])

    // async function getRecieverCode() {
    //     const response = await getRequest(`${baseURL}${GET_CALL_ID}/${id}`);
    //     if (response.code) {
    //         peer.signal(response.code);
    //     }
    // }

    const initWebRTC = () => {
        // navigator.mediaDevices.getUserMedia({
        //     video: true,
        //     audio: true
        // })
    }

    return (
        <div className="callpage-container">
            <video src="" className="video-container" controls></video>
            <CallPageHeader />
            <CallPageFooter />
            {(isAdmin && meetingInfoPopup) && <MeetingInfo meetingInfoPopup={meetingInfoPopup} url={url} />}
            <Messanger />
        </div>
    )
}

export default CallPage
