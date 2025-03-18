"use client"

import React from 'react'

const Page = () => {

  return (
    <>
        <div className='w-full h-[100dvh] bg-pink-shade flex justify-center items-center'>
            <div className='bg-white drop-shadow-md w-[500px] px-[30px] py-[40px]'>
                <div className='w-full text-center'>
                    <h3 className='font-inter-bold text-[30px] leading-[36px] text-text-normal-black'>Welcome Back</h3>
                    <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Sign in to your account</p>
                </div>
                <form className='w-full flex flex-col gap-[20px]'>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <label htmlFor="">E-Mail</label>
                    <input type="email" className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' />
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <label htmlFor="">E-Mail</label>
                    <input type="email" className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' />
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <p>Forgot Password?</p>
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <button type="submit" className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' >Log In</button>
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <p>Don't have an account? <span><a href="">Register</a></span></p>
                  </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Page