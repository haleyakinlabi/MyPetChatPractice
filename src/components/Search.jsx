import React from "react";

const Search = () => {

    return(
        <div className="search">
            <div className="searchForm">
                <input className="searchInput"type="text" placeholder="Find a user"></input>
            </div>
            <div className="userChat">
                <img className="chatimg" src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg" alt=""></img>
            <div className="userChatInfo">
                    <span>Jane</span>
            </div>
            </div>
        </div>
    )
}


export default Search