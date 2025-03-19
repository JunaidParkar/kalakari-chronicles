"use client"

import { ChevronsLeft, ChevronsRight, ShoppingCart, UserPen } from 'lucide-react'
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

      <div className="w-full h-[550px] bg-[url('/assets/images/handcrafted.jpg')] bg-cover bg-center mt-[20px]">
        <div className='w-full h-full bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))] flex flex-col gap-[15px] justify-center items-center'>
          <h3 className='font-inter-regular text-[48px] leading-[48px] text-white'>Handcrafted with love</h3>
          <p className='font-inter-regular text-[20px] leading-[28px] text-white'>Discover unique artisan creations</p>
          <div className='w-max px-[20px] h-[37px] bg-pink-accent rounded-[8px] flex justify-center items-center cursor-pointer'><p className='font-inter-medium text-[16px] leading-[24px] text-white'>Sign in</p></div>
        </div>
      </div>

      <div className='w-full px-[125px]'>
        <h3 className='font-inter-bold text-[30px] leading-[36px] text-text-normal-black'>Shop by category</h3>

        <div className='w-full overflow-x-auto flex gap-[15px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 relative'>
          <div className='absolute top-[50%] translate-y-[-50%] p-[25px] bg-pink-accent left-0 rounded-full cursor-pointer drop-shadow-md'><ChevronsLeft className='text-white' /></div>
          <div className='absolute top-[50%] translate-y-[-50%] p-[25px] bg-pink-accent right-0 rounded-full cursor-pointer drop-shadow-md'><ChevronsRight className='text-white' /></div>
          <div className='w-[calc(25%-12px)] shrink-0 aspect-[9/11] bg-red-500'></div>
          <div className='w-[calc(25%-12px)] shrink-0 aspect-[9/11] bg-red-500'></div>
          <div className='w-[calc(25%-12px)] shrink-0 aspect-[9/11] bg-red-500'></div>
          <div className='w-[calc(25%-12px)] shrink-0 aspect-[9/11] bg-red-500'></div>
          <div className='w-[calc(25%-12px)] shrink-0 aspect-[9/11] bg-red-500'></div>
          <div className='w-[calc(25%-12px)] shrink-0 aspect-[9/11] bg-red-500'></div>
        </div>
      </div>

    </>
  )
}

export default Page