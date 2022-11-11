import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src='https://picsum.photos/200' alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src='https://picsum.photos/200' alt ="" />
      </div>

    </div>
  )
}

export default Message