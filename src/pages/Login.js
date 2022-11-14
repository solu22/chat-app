import React from 'react'
import { useNavigate } from 'react-router'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")  
      } catch (error) {
      console.log(error);
    }
  }
   
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Let's Chat</span>
            <span className='register'>Register</span>
            <form onSubmit= {handleSubmit}>
                <input type= 'email'placeholder='email'/>
                <input type= 'password' placeholder='password'/>
                <button>Sign In</button>

            </form>
            <p>You don't have an account? <Link to= "/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login