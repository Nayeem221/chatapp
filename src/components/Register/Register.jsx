import React, { useState } from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from 'react-toastify';
const Register = () => {
  const navigate=useNavigate()
const [name,setname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [nameerror,setnameerror]=useState('')
const [emailerror,setemailerror]=useState('')
const [passworderror,setpassworderror]=useState('')
const [show,Setshow]=useState(false)
// firebase variables  ============================================== -====================??=
const auth = getAuth();







const handleshow=()=>{
  Setshow(!show)
}
const handlesubmit=(e)=>{
  e.preventDefault()
  if(!name){
    setnameerror('Enter your name')
  }
if(!email){
  setemailerror('Enter your email')
}
if(!password){
  setpassworderror('Enter your password')
}else{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     
    const user = userCredential.user;
    sendEmailVerification(auth.currentUser)
    .then(() => {
  
    });
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   if(errorCode=='auth/email-already-in-use '){
    toast.info('🦄 Email has already taken!',{
      position: "bottom-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
   }
  });
 
  
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
    <h2>Create Account</h2>
    <div className="button">
        <button><img className='' src="google.png" alt="" /> <h3>Sign up with google</h3></button>
        <button><img src="fb.png" alt="" /> <h3>Sign up with Facebook</h3></button>
    </div>
    <h4>-OR-</h4>
    <div className="accountmainform ">
      <form action="">
        <input onChange={(e)=>{setname(e.target.value),setnameerror('') }} type="text" placeholder='Full Name' />
        <span>{nameerror}</span>
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
      <button onClick={handlesubmit}>Create Account</button>
    </div>
    <div className="lasttext">
      <p>Already have an account?</p>
      <button onClick={()=>navigate('/login')}>Login</button>
    </div>
    
</div>
     </div>
     
    </div>
    </>
  )
}

export default Register
