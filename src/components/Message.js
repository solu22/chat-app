import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { UserChatContext } from '../context/UserChatContext';

const Message = ({m}) => {
  const { currUser} = useContext(AuthContext)
  const { data } = useContext(UserChatContext);

  return (
    <div className={`message ${m.senderId === currUser.uid && "owner"}`}>
      
      <div className="mInfo">
        <img src={m.senderId === currUser.uid ? currUser.photoURL: data.user.photoUR} alt="" />
        <span>just now</span>
      </div>
      <div className='mContent'>
        <p>{m.text}</p>
        {m.img && <img src= {m.img} alt ="" />}
      </div>

    </div>
  )
}

export default Message