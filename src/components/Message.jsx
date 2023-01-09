import React from "react";

const Message = () => {

    return(
        <div className="message owner">
            
            <div className="messageInfo">
                <img className="msgInfoImg"src="https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg" alt=""></img>
                <span className="msgInfoSpan">just now</span>
            </div>
            
            <div className="messageContent">
                <p className="messageContentPtag">Hello</p>
                {/* <img className="msgContentImg"src="https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg" alt=""></img> */}
            </div>

        </div>
    )
}


export default Message