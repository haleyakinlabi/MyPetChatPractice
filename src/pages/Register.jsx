import React, { useState } from "react";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage, db } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";



const Register = () => {

    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    //onSubmit/handleSubmit Function

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
    
        try {
          //Create user
          const res = await createUserWithEmailAndPassword(auth, email, password);
    
          //Create a unique image name
          const date = new Date().getTime();
          const storageRef = ref(storage, `${displayName + date}`);
    
          await uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                
                //Update profile
                await updateProfile(res.user, {
                  displayName,
                  photoURL: downloadURL,
                });
                
                //create user on firestore
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  photoURL: downloadURL,
                });
    
                //create empty user chats on firestore
                await setDoc(doc(db, "userChats", res.user.uid), {});
                
                navigate("/");
              
                } catch (err) {
                console.log(err);
                setErr(true);
                
              }
            });
          });
        } catch (err) {
          setErr(true);
          
        }
      };

    
    return(


        <div className="formContainer">

        <div className="formWrapper"></div>

        {/* Register Form */}

        <form onSubmit={handleSubmit}>
        
        <span className="logo">Chat</span>

        <span className="title">Register</span>

        {/* inputs */}
        <input type="text" placeholder="display name"></input>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <input style={{display:"none"}} type="file" id="file"></input>
        <label htmlFor="file">
            <img className="registerAddImg"src="https://img.icons8.com/ios-glyphs/512/add-image.png" alt=""></img>
            <span>Add a profile picture </span>
        </label>

        <button>Sign Up</button>

        {err && <span>Something went wrong</span>}

        </form>

        <p className="loginLink">Already have an account? Login</p>

        </div>



    )


}


export default Register 