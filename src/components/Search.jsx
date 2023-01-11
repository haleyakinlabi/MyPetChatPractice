import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc,} from "firebase/firestore";
import { db, auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";


const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthContext)


  //handleSearch

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    )
        
    try {
      const querySnapshot = await getDocs(q)
      
      debugger
      
      querySnapshot.forEach((doc) => {
        
        setUser(doc.data())
      })
    } catch (err) {

      setErr(true)
    }
  }

  //handleKey
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  //handleSelect
  const handleSelect = async () => {

    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid

    try{
    const res = await getDoc(doc(db, "chats", combinedId))
    
    if(!res.exists()){
      //create chat in chats collection
      await setDoc(doc(db, "chats", combinedId), {messages:[]})
      
      //create user chats
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId+".userInfo"]: {
          uid:user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        },
        [combinedId+".date"]: serverTimestamp()
      })

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId+".userInfo"]: {
          uid:currentUser.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        },
        [combinedId+".date"]: serverTimestamp()
      })
    }
  }catch(err) {}

  setUser(null)
  setUsername("")
  }

  return (
    <div className="search">
      <div className="searchForm">
        
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>Unable to find user</span>}
      
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img className="searchImg"
          src={user.photoURL} 
          alt="" />
          
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;