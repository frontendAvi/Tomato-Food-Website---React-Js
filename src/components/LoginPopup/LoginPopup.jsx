import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Log in")

  return (
    <div className='login-popup'>
        <form  className="login-popup-conatiner">
            <div className="login-popup-title">
                <h2>{currState} </h2>
                <img onClick={()=>setShowLogin(false    )} src={assets.cross_icon} alt="" />

            </div>
            <div className="login-popup-input">
                {currState==="Log in"?<></>:    <input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button className=''>{currState==="Sign Up"? "Create account":"Log in"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Log in"?   <p>Create a new account?  <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                                 :   <p>Already have an account?  <span onClick={()=>setCurrState("Log in")}>Log in</span></p>
            }
          
        </form>
    </div>
  )
}

export default LoginPopup