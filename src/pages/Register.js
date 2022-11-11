import React, { useState } from 'react'
import { FcAddImage } from 'react-icons/fc'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';

const Register = () => {
  const [err, setErr] = useState(false)
  const handleSubit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]


    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
           await updateProfile(res.user,{ displayName, photoURL:downloadURL})
          });
        }
      );
    } catch (error) {
      setErr(true)
    }




  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Let's Chat</span>
        <span className='register'>Register</span>
        <form onSubmit={handleSubit}>
          <input type='text' placeholder='name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{ display: 'none' }} type='file' id='file' />
          <label htmlFor='file'>
            <FcAddImage size={32} />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>

        </form>
        <p>You do have an account? Login</p>
        {err && <span>Something is wrong</span>}
      </div>
    </div>
  )
}

export default Register