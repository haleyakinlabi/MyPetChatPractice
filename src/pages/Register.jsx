import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


const createDBUser = (userID, displayName, email) => {
}


const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


// ------------------------------------------------------------------
  //handleSubmit
  const handleSubmit = async (e) => {
    setLoading(true);
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
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
//------------------------------------------------------------------------

  return (
    <div className="formContainer">
      
      <div className="formWrapper">
        
      
        
        <h1 className="title">Create an account</h1>

        {/* Form */}
        
        <form onSubmit={handleSubmit}>
          
          <input 
          className="registerInput" 
          required type="text" 
          placeholder="display name" 
          />
          
          <input 
          className="registerInput"
          required type="email" 
          placeholder="email" 
          />
          
          <input 
          className="registerInput" 
          required type="password" 
          placeholder="password" />
          
          <input required style={{ display: "none" }} type="file" id="file" />
          
          <label htmlFor="file">
            <img className="registerAddImg" src="https://img.icons8.com/ios-glyphs/512/add-image.png" alt="" />
            <span className="addImg">Add a profile picture</span>
          </label>
          
          <button className="registerBtn" disabled={loading}>Sign up</button>
          
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span className="wrong">Something went wrong</span>}
        
        </form>
        <p className="haveAccount">
          Already have an account? <Link className="loginLink"to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;