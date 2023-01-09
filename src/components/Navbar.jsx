import React from "react";

const Navbar = () => {

    return(
        <div className="navbar">
            <span className="logo">Chat</span>
            
            <div className="user">
                <img className="userimg"src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg" alt=""></img>
                <span>John</span>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}


export default Navbar