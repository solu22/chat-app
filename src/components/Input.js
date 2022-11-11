import React from 'react'
import {HiPhotograph} from 'react-icons/hi'
import {GrAttachment} from 'react-icons/gr'

const Input = () => {
  return (
    <div className='input'>
        <input type ='text' placeholder='Type message here' />
        <div className='send'>
          
            <HiPhotograph className='img'/>
            <input type='file' style={{display:'none'}}  id='file'/>
            <label htmlFor='file'>
                <GrAttachment  />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input