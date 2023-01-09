import React from "react";

const Input = () => {

    return(
        <div className="input">

        <input className="inputInput"type="text" placeholder="Type something..."></input>

        <div className="send">

            <input type="file" style={{display: "none"}} id="file"></input>
            <label htmlFor="file">
                <img className="addImg"src="https://img.icons8.com/ios-glyphs/512/add-image.png" alt=""></img>
            </label>
            <button className="inputSendBtn">Send</button>
        </div>
        

        </div>
    )
}


export default Input