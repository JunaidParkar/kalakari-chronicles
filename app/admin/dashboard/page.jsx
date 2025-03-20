import { Plus } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <>
        <div className='w-full h-[75px] px-[25px] flex justify-between items-center bg-white border-0 border-b border-white-border'>
            <h3 className='font-inter-bold text-[24px] leading-[32px] text-pink-accent'>Admin Panel</h3>
            <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Sharvari Uttam Palande</p>
        </div>

        <div className='w-full h-[35px] px-[25px] mt-[30px]'>
            <div className='w-max h-full bg-pink-accent flex gap-[0px] justify-between items-center rounded-[8px] px-[10px] pr-[15px]'>
                <Plus size={20} className='text-white' />
                <p className='font-inter-medium text-[16px] leading-[20px] text-white'>Add a product</p>
            </div>
        </div>
    </>
  )
}

export default Page