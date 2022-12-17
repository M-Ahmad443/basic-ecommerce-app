import React, { useRef } from 'react'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {register} from '../features/auth/authSlice'

import '../style.css'


const Register = () => {
   const [user, setUser]= useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    phoneNo:"",
   });
   const result=useSelector(state=>state.auth)
   const dispatch=useDispatch()
   const inputRef=useRef()
    const onchange=(e)=>{
      setUser((prevState)=>({...prevState,[e.target.name]:e.target.value}))



    }

  const submitHandler=(e)=>{
    e.preventDefault();
    if(user.password === user.confirmPassword){
      const {confirmPassword, ...others}=user
      dispatch(register(others));
      
    }
    else{
      console.log('password not correct');
    }
    Array.from(document.querySelectorAll("input")).map((n)=>n.value="")
     

  }

  return (
    <section className='register'>
      <div>
      <center><h1 className='section-title'><u>Register</u></h1></center>
      </div>

      <div>
        <center>
      <form className='register-form' onSubmit={submitHandler}>
        <div>
        <input type="text" ref={inputRef}  className='input-register' name="username"  value={user.username} onChange={onchange} id="" placeholder='Name' />
        </div>
        <div>
        <input type="email" ref={inputRef}  name="email" className='input-register' value={user.email} onChange={onchange} id="" placeholder='Email' />
        </div>
        <div>
        <input type="password" ref={inputRef}  name="password" className='input-register' value={user.password} onChange={onchange} id="" placeholder='Password' />
        </div>
        <div>
        <input type="password" ref={inputRef}  name="confirmPassword" className='input-register' value={user.confirmPassword} onChange={onchange} id=""placeholder='Confirm Password' />
        </div>
        <div>
        <input type="number" ref={inputRef}  name="phoneNo" className='input-register' value={user.phoneNo} onChange={onchange} id=""placeholder='PhoneNo' />
        </div>
        <button type='submit'>submit</button>

      </form>
      </center>
      </div>
      <div>{console.log(result.user)}</div>

    </section>
  )
}

export default Register