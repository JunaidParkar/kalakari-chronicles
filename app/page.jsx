"use client"

import { ShoppingCart, UserPen } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className='w-full px-[125px] border-0 border-b-[2px] border-white-border'>
        <div className='w-full h-[75px] flex items-center justify-between'>
          <h3 className='w-[25%] text-start font-inter-bold text-[24px] leading-[32px] text-text-normal-black'>Kalakari chronicles</h3>
          <input type="text" name="" id="" placeholder='Search for handicrafted items...' className='w-[50%] border-[1px] border-white-border h-[32px] px-[15px] font-inter-regular text-[16px] leading-[24px] rounded-[8px] outline-0' />
          <div className='flex flex-row items-center gap-[25px] w-[25%] justify-end'>
            <ShoppingCart size={24} color='#1F2937' className='cursor-pointer' />
            <UserPen size={24} color='#1F2937' className='cursor-pointer' />
            <div className='px-[15px] h-[32px] bg-pink-accent rounded-[8px] flex justify-center items-center cursor-pointer'><p className='font-inter-medium text-[16px] leading-[24px] text-white'>Sign in</p></div>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px] bg-[url('/handcrafted.jpg')] bg-cover bg-center mt-[20px]"></div>

    </>
  )
}

export default Page