"use client"

import React from 'react'

const Page = () => {

  return (
    <>
        <div className='w-full h-[100dvh] bg-pink-shade flex justify-center items-center'>
            <div className='bg-white drop-shadow-md w-[500px] px-[30px] py-[40px] rounded-[12px]'>
                <div className='w-full text-center mb-[40px]'>
                    <h3 className='font-inter-bold text-[30px] leading-[36px] text-text-normal-black'>Welcome Back</h3>
                    <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Sign in to your account</p>
                </div>
                <form className='w-full flex flex-col gap-[20px]'>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <label htmlFor="email" className='font-inter-medium text-[16px] leading-[24px]'>E-Mail</label>
                    <input type="email" id='email' className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' placeholder='Enter your E-Mail' />
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <label htmlFor="password" className='font-inter-medium text-[16px] leading-[24px]'>Password</label>
                    <input type="password" id='password' className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' placeholder='Enter your password' />
                  </div>
                  <div className='w-full flex flex-col gap-[10px] text-end'>
                    <a href='' className='font-inter-medium text-[16px] leading-[24px] text-pink-accent'>Forgot Password?</a>
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <input type="submit" className='cursor-pointer bg-pink-accent text-white w-full px-[15px] py-[10px] outline-0 rounded-[8px] font-inter-regular text-[16px] leading-[24px]' value="Log In" />
                  </div>
                  <div className='w-full flex flex-col gap-[10px] text-center'>
                    <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Don't have an account? <span><a href="" className='font-inter-medium text-pink-accent'>Register</a></span></p>
                  </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Page