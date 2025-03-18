"use client"

import React from 'react'

const Page = () => {

  return (
    <>
        <div className='w-full h-[100dvh] bg-pink-shade flex justify-center items-center'>
            <div className='bg-white drop-shadow-md w-[500px] px-[30px] py-[40px] rounded-[12px]'>
                <div className='w-full text-center mb-[40px]'>
                    <h3 className='font-inter-bold text-[30px] leading-[36px] text-text-normal-black'>Create Account</h3>
                    <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Join our creative community</p>
                </div>
                <form className='w-full flex flex-col gap-[20px]'>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <label htmlFor="name" className='font-inter-medium text-[16px] leading-[24px]'>Name</label>
                    <input type="text" id='name' className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' placeholder='Enter your name' />
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <label htmlFor="email" className='font-inter-medium text-[16px] leading-[24px]'>E-Mail</label>
                    <input type="email" id='email' className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' placeholder='Enter your E-Mail' />
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <label htmlFor="password" className='font-inter-medium text-[16px] leading-[24px]'>Password</label>
                    <input type="password" id='password' className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' placeholder='Enter your password' />
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <label htmlFor="Cpassword" className='font-inter-medium text-[16px] leading-[24px]'>Confirm Password</label>
                    <input type="password" id='Cpassword' className='w-full px-[15px] py-[10px] outline-0 border-2 rounded-[8px] border-white-border font-inter-regular text-[16px] leading-[24px]' placeholder='Enter your password' />
                  </div>
                  <div className='w-full flex gap-[10px]'>
                    <input type="checkbox" name="" id="" />
                    <p className='font-inter-regular text-[16px] leading-[24px]'>I agree with our <a href="">terms and policy.</a></p>
                  </div>
                  <div className='w-full flex flex-col gap-[10px]'>
                    <input type="submit" className='cursor-pointer bg-pink-accent text-white w-full px-[15px] py-[10px] outline-0 rounded-[8px] font-inter-regular text-[16px] leading-[24px]' value="Create Account" />
                  </div>
                  <div className='w-full flex flex-col gap-[10px] text-center'>
                    <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Already have an account? <span><a href="" className='font-inter-medium text-pink-accent'>Login</a></span></p>
                  </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Page