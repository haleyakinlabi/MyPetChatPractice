import React from "react";


const Login = () => {

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
        

        <button>Sign In</button>

        </form>

        <p className="loginLink">Don't have an account? Register</p>

        </div>



    )


}


export default Login