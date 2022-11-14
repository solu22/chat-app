import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const Navbar = () => {
  const { currUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <span className='logo'>Let's Chat</span>
        <div className='user'>
            <img src= {currUser.photoURL} alt='img' />
            <span>{currUser.displayName}</span>
            <button onClick={ ()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar