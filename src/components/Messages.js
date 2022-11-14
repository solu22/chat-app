import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useState, useEffect } from 'react'
import { UserChatContext } from '../context/UserChatContext'
import { db } from '../firebase'
import Message from './Message'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(UserChatContext)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
   
    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages?.map((me) => (
        <Message m = {me} key = {me.id} /> 
      ))}
    </div>
  );
}

export default Messages