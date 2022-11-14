import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { useContext } from 'react'
import { UserChatContext } from '../context/UserChatContext'

const Chats = () => {
    const [chats, setChats] = useState([])
    const { currUser}  = useContext(AuthContext)
    const { dispatch } = useContext(UserChatContext);
    useEffect(()=>{
        const getChats = ()=>{
            const unsubs = onSnapshot(
              doc(db, "userChatCollection", currUser.uid),
              (doc) => {
                setChats(doc.data());
              }
            );

            return () => {
              unsubs();
            };
        }
        currUser.uid && getChats();
    },[currUser.uid])

    const handleSelect = (u)=>{
        dispatch({
            type: "CHANGE_USER",
            payload:u
        })
    }
  return (
    <div className="chats">
      {Object.entries(chats).map((chat) => (
        <div className="userChat" key = {chat[0]} onClick= {()=>handleSelect(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chats