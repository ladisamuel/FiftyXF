import React from 'react'
import { useNavigate } from 'react-router-dom'

import GoogleIcon from '../../assets/icons/google.png'
import LoginImg from '../../assets/login/girlWithCap.png'

export default function Register() {

  const navigate = useNavigate()
  
  return (
    <div className='  '>
      {/* <Headers /> */}
      <div className="flex row h-[100vh] borde py-5 lg:px-10 ">
          
            <div className="hidden lg:block w-[40%] bg[#cccccc] rounded-2xl ">
              <img src={LoginImg} className='h-full' alt="" />
            </div>
            <div className="w-[60%] px-10 relative">
              <div>
                <h2 className='font-bold text-2xl'>Sign Up</h2>
                <h3 className='font-bold text-xl my-1'>Create an Account</h3>
                <p  className=''>It’s nice to see you again, Ready to trade?</p>
              </div>

              <form action="" className='mt-3 w-[80%] ' >
                <div>
                  <input className='border w-full p-3 rounded-xl !bg-white' type="email" autoComplete="off" placeholder='Your Username or Email' />
                </div>
                <div className='my-3 '>
                  <input className='border w-full p-3 rounded-xl !bg-white' type="password" placeholder='Your Password' />
                </div>
                <div className='my-3 '>
                  <input className='border w-full p-3 rounded-xl !bg-white' type="password" placeholder='Confirm Password' />
                </div>
                <div className='my-3 '>
                  <input className='border w-full p-3 rounded-xl !bg-white' type="text" placeholder='Verification Code' />
                </div>
                <div>
                  <input className='border w-full p-3 rounded-xl bg-[#2394E5] text-white  ' type="submit" value="Log In" />
                </div>
              </form>

              <div className='mt-2 w-[80%] '>

                <div className='mt-7 relative flex item-center justify-between '>
                  <hr className='w-[40%]'/>
                  <p className='absolute right-[50%] top-0 -translate-y-1/2 translate-x-1/2 font-bold '>OR</p>
                  <hr className='w-[40%]'/>
                </div>

                <div>
                  <p className='border my-7 w-full p-3 rounded-xl bg[#2394E5] text-center font-bold relative'  ><img className='absolute left-3 top-[50%] -translate-y-1/2' src={GoogleIcon} alt="" /><span >Continue with Google</span></p>

                </div>
              </div>

              <div className='absolute bottom-0 w-[80%] text-center pr-10 '>
                <p onClick={()=>navigate('/sign-in')} className='cursor-pointer'>Already have an account? <span className='text-[#2394E5]' > Login</span></p>
              </div>

            </div>
        </div>
    </div>
  )
}
