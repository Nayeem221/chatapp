import React, { useState } from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
const Login = () => {
  const navigate=useNavigate()
  const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [emailerror,setemailerror]=useState('')
const [passworderror,setpassworderror]=useState('')
const [show,Setshow]=useState(false)












const handleshow=()=>{
  Setshow(!show)
}
const handlesubmit=(e)=>{
  e.preventDefault()
  
if(!email){
  setemailerror('Enter your email')
}
if(!password){
  setpassworderror('Enter your password')
}else{
 
 
  
}
}
  return (
    <>
    <div className='account '>
     <div className="accounttext">
        <h1>Find 3D Objects, Mockups and
Illustrations here.</h1>
        <p></p>
        <div className="accountimage">
        <img src="registerbg.png" alt="" />
     </div>
     </div>
     <div className="accountform">
<div className="accountformhead">
    <h2>Login</h2>
    <div className="button">
        <button><img className='' src="google.png" alt="" /> <h3>Login with google</h3></button>
        <button><img src="fb.png" alt="" /> <h3>Login with Facebook</h3></button>
    </div>
    <h4>-OR-</h4>
    <div className="accountmainform ">
      <form action="">
        
      <input onChange={(e)=>{setemail(e.target.value), setemailerror('')}} type="email" placeholder='Email Address' />
        <span>{emailerror}</span>
        <input onChange={(e)=>{setpassword(e.target.value), setpassworderror('') }} type="password" placeholder='Password' />
        <span>{passworderror}</span>
        {
          show?
<IoEyeOffOutline onClick={handleshow} className='absolute lg:left-[65%] lg:top-[80%] top-[87%] left-[90%] ' /> 
:
<FaEye onClick={handleshow} className='absolute lg:left-[65%] lg:top-[80%] top-[87%] left-[90%]' / >
        }
      </form>
    </div>
    <div className="createaccountbutton">
      <button onClick={handlesubmit}>Login</button>
    </div>
    <div className="lasttext">
      <p>Don't have an ACCOUNT?</p>
      <button onClick={()=>navigate('/')}>Registration</button>
    </div>
    
</div>
     </div>
     
    </div>
    </>
  )
}

export default Login
