import React from 'react'

import {BsFillCameraVideoOffFill} from 'react-icons/bs'
import { AiOutlineUsergroupAdd} from 'react-icons/ai'
import { FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
    <div className='chatInfo'>
      <span>Nuru</span>
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