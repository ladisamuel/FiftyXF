import React from 'react'
import GoogleIcon from '../../assets/icons/google.png'
import LoginImg from '../../assets/login/girlWithCap.png'
export default function Login() {
  return (
    <div>
        <div className="flex row border h-[100vh] p-5 ">
          
            <div className="hidden lg:block w-[40%] bg[#cccccc] rounded-2xl ">
              <img src={LoginImg} className='h-full' alt="" />
            </div>
            <div className="w-[60%] px-10 relative">
              <div>
                <h2 className='font-bold text-2xl'>Welcome Back!</h2>
                <h3 className='font-bold text-xl my-3'>Log In to your Account</h3>
                <p  className=''>It’s nice to see you again, Ready to trade?</p>
              </div>

              <form action="" className='mt-10 w-[80%] ' >
                <div>
                  <input className='border w-full p-3 rounded-xl !bg-white' type="text" autoComplete="off" placeholder='Your Username or Email' />
                </div>
                <div className='my-5 '>
                  <input className='border w-full p-3 rounded-xl !bg-white' type="password" placeholder='Your Password' />
                </div>
                <div>
                  <input className='border w-full p-3 rounded-xl bg-[#2394E5] text-white  ' type="submit" value="Log In" />
                </div>
              </form>

              <div className='mt-2 w-[80%] '>
                <div className=" flex item-center justify-between">
                  <div>
                    <input type="checkbox" checked className='accent-black mr-2' />
                    <span>Remember me</span>
                  </div>
                  <div>
                    <p className='text-[#2394E5] '>Forgot Password?</p>
                  </div>
                </div>

                <div className='mt-10 relative flex item-center justify-between '>
                  <hr className='w-[40%]'/>
                  <p className='absolute right-[50%] top-0 -translate-y-1/2 translate-x-1/2 font-bold '>OR</p>
                  <hr className='w-[40%]'/>
                </div>

                <div>
                  <p className='border my-7 w-full p-3 rounded-xl bg[#2394E5] text-center font-bold relative'  ><img className='absolute left-3 top-[50%] -translate-y-1/2' src={GoogleIcon} alt="" /><span >Continue with Google</span></p>

                </div>
              </div>

              <div className='absolute bottom-0 w-[80%] text-center pr-10 '>
                <p>Don’t have an account? <span className='text-[#2394E5]' > Sign Up</span></p>
              </div>

            </div>
        </div>
    </div>
  )
}
