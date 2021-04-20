import CallPageHeader from "../HomePage/UI/CallPageHeader/CallpageHeader";
import CallPageFooter from "../HomePage/UI/CallPageFooter/CallPageFooter";
import MeetingInfo from "../HomePage/UI/MeetingInfo/MeetingInfo";
import Messanger from "../HomePage/UI/Messanger/Messanger";
import MessageListReducer from "./../../reducer/messageListReducer";
import { getRequest, postRequest } from "./../../utils/apiRequest";
import { baseURL, GET_CALL_ID, SAVE_CALL_ID } from "./../../utils/apiEndpoints";
import io from "socket.io-client";
import "./CallPage.scss";
import { useEffect, useState, useReducer } from "react";
import { useParams, useHistory } from "react-router-dom";
import Peer from "simple-peer";

const initialState = [];
let peer = null;
const socket = io.connect("http://localhost:5000");

function CallPage() {
    let { id } = useParams();
    // eslint-disable-next-line
    const history = useHistory();
    const isAdmin = window.location.hash === "#init" ? true : false;
    const url = `${window.location.origin}${window.location.pathname}`;
    const [meetingInfoPopup, setMeetingInfoPopup] = useState(false);
    // eslint-disable-next-line
    const [state, dispatch] = useReducer(MessageListReducer, initialState);
    // eslint-disable-next-line
    const [streamObj, setStreamObj] = useState();
    // eslint-disable-next-line
    const [screenCastStream, setScreenCastStream] = useState();
    // eslint-disable-next-line
    const [isPresenting, setIsPresenting] = useState(false);
    // eslint-disable-next-line
    const [isMessanger, setIsMessanger] = useState(false);
    // eslint-disable-next-line
    const [messageAlert, setMessageAlert] = useState({});
    // eslint-disable-next-line
    const [isAudio, setIsAudio] = useState(true);


    useEffect(() => {
        if (isAdmin) {
            setMeetingInfoPopup(true);
        }
        initWebRTC();
        socket.on("code", (data) => {
            peer.signal(data)
        })
        // eslint-disable-next-line
    }, [])

    async function getRecieverCode() {
        const response = await getRequest(`${baseURL}${GET_CALL_ID}/${id}`);
        if (response.code) {
            peer.signal(response.code);
        }
    }

    function initWebRTC() {
        navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {
                setStreamObj(stream);

                peer = new Peer({
                    initiator: isAdmin,
                    trickle: false,
                    stream: stream,
                });

                if (!isAdmin) {
                    getRecieverCode();
                }

                peer.on("signal", async (data) => {
                    if (isAdmin) {
                        let payload = {
                            id,
                            signalData: data,
                        };
                        await postRequest(`${baseURL}${SAVE_CALL_ID}`, payload);
                    } else {
                        socket.emit("code", data, (cbData) => {
                            console.log("code sent");
                        });
                    }
                });
                peer.on("connect", () => {
                    console.log("Peer connected");
                })

                peer.on("stream", (stream) => {
                    // got remote video stream, now let's show it in a video tag
                    let video = document.querySelector("video");

                    if ("srcObject" in video) {
                        video.srcObject = stream;
                    } else {
                        video.src = window.URL.createObjectURL(stream); // for older browsers
                    }

                    video.play();
                });
            }).catch(e => {
                console.log("ERROR: ", e);
            })
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
