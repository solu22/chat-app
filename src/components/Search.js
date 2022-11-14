import React, { useContext, useState } from "react";
import { collection, query, where, getDoc, setDoc, doc, updateDoc, serverTimestamp, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext"

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currUser} = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(
      collection(db, "chatusers"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };
  const handleKeyDown = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async ()=>{
      const combinedId =  currUser.uid >user.id ? currUser.uid + user.uid: user.uid + currUser.uid
      try {
          const res = await getDoc(doc(db, "chats", combinedId));
          if(!res.exists()){
            await setDoc(doc(db, "chats", combinedId),{ messages:[]});
            await updateDoc(doc(db, "userChatCollection", currUser.uid),{
                [combinedId+".userInfo"]:{
                    uid: user.uid,
                    displayName:user.displayName,
                    photoURL: user.photoURL
                },
                [combinedId+".date"]: serverTimestamp()
                
            
          });
          await updateDoc(doc(db, "userChatCollection", user.uid), {
            [combinedId + ".userInfo"]: {
              uid: currUser.uid,
              displayName: currUser.displayName,
              photoURL: currUser.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
        console.log([combinedId + ".date"]);
    }catch (error) {
          console.log(error);
      }
      setUser(null)
      setUserName("")
      
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="search for a friend"
          onKeyDown={handleKeyDown}
          onChange={(e) => setUserName(e.target.value)}
          value= {userName}
        />
      </div>
      {err && <span>no such friend found</span>}
      {user && (
        <div className="userChat" onClick= {handleSelect}>
          <img src={user.photoURL} alt="img" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
