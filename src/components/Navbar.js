import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Let's Chat</span>
        <div className='user'>
            <img src='https://picsum.photos/200' alt='img' />
            <span>Nuru</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar