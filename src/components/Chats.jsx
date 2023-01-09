import React from "react";

const Chats = () => {

    return(
        <div className="Chats">
            
            <div className="userChat">
                <img className="chatimg" src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg" alt=""></img>
                <div className="userChatInfo">
                        <span className="spanUsername">Jane</span>
                        <p className="latestChat">Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img className="chatimg" src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg" alt=""></img>
                <div className="userChatInfo">
                        <span className="spanUsername">Jane</span>
                        <p className="latestChat">Hello</p>
                </div>
            </div>



        </div>
    )
}


export default Chats