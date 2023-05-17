import React, { useEffect } from "react";
// import ZoomMtg from "@zoomus/websdk"; // Import Zoom Web SDK library

export const ZoomMeeting = () => {
    useEffect(() => {
        const initZoomMeeting = async () => {
            const { ZoomMtg } = window;

            ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.9/lib", "/av");
            ZoomMtg.preLoadWasm();
            ZoomMtg.prepareJssdk();

            const apiKey = "nxdr8xwiRgKsBe0lPgyxyQ"; // Replace with your Zoom API Key
            const meetingNumber = "88348214360"; // Replace with your Zoom Meeting Number
            const userName = "USER_NAME"; // Replace with user's name
            const userEmail = "jainshivam100@gmail.com"; // Replace with user's email
            const passWord = "H663Bs"; // Replace with meeting password

            ZoomMtg.init({
                leaveUrl: "https://zoom.us", // URL to redirect to after leaving the meeting
                isSupportAV: true,
                success: (success) => {
                    ZoomMtg.join({
                        meetingNumber: meetingNumber,
                        userName: userName,
                        userEmail: userEmail,
                        passWord: passWord,
                        apiKey: apiKey,
                        success: (success) => {
                            console.log("join meeting success", success);
                        },
                        error: (error) => {
                            console.log("join meeting error", error);
                        },
                    });
                },
                error: (error) => {
                    console.log("initialize error", error);
                },
            });
        };

        initZoomMeeting();
    }, []);

    return (
        <div>
            {/* Container element where Zoom meeting will be embedded */}
            <div id="zoomMeeting"></div>
        </div>
    );
};

export default ZoomMeeting;
