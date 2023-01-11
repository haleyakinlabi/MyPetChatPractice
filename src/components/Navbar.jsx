import React, {useContext} from "react";
import { signOut} from "firebase/auth"
import { auth } from "../firebase"
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const {currentUser} = useContext(AuthContext)

    return(
        <div className="navbar">
            <span className="logo">Chat</span>
            
            <div className="user">
                <img className="userimg"src={currentUser.photoURL} alt=""></img>
                <span>{currentUser.displayName}</span>
                <button className="logout" onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}


export default Navbar