import React, { useContext } from 'react'

import {BsFillCameraVideoOffFill} from 'react-icons/bs'
import { AiOutlineUsergroupAdd} from 'react-icons/ai'
import { FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import { UserChatContext } from '../context/UserChatContext'

const Chat = () => {
  const { data} = useContext(UserChatContext)
  return (
    <div className='chat'>
    <div className='chatInfo'>
      <span>{data.user?.displayName}</span>
      <div className='chatIcons'>
      <BsFillCameraVideoOffFill className='icons' />
      <AiOutlineUsergroupAdd className='icons' />
      <FiMoreHorizontal className='icons' />
      </div>
      
    </div>
    <Messages />
    <Input />
    </div>
  )
}

export default Chat