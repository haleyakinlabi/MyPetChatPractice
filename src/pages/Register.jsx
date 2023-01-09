import React from "react";


const Register = () => {

    return(

        <div className="formContainer">

        <div className="formWrapper"></div>

        {/* Register Form */}

        <form>
        
        <span className="logo">Chat</span>

        <span className="title">Register</span>

        {/* inputs */}
        <input type="text" placeholder="display name"></input>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <input style={{display:"none"}} type="file" id="file"></input>
        <label htmlFor="file">
            <img src="https://icons8.com/icon/60628/add-image" alt=""></img>
            <span>Add a profile picture </span>
        </label>

        <button>Sign Up</button>

        </form>

        <p className="loginLink">Already have an account? Login</p>

        </div>



    )


}


export default Register 