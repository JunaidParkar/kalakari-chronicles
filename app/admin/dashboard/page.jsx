import { ArrowLeft, ArrowRight, Pencil, Plus, Trash } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className='w-full h-[75px] px-[25px] flex justify-between items-center bg-white border-0 border-b border-white-border'>
        <h3 className='font-inter-bold text-[24px] leading-[32px] text-pink-accent'>Admin Panel</h3>
        <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Sharvari Uttam Palande</p>
      </div>

      <div className='w-full h-[35px] px-[25px] mt-[30px] flex items-center justify-between'>
        <div className='w-max h-full bg-pink-accent flex gap-[0px] justify-between items-center rounded-[8px] px-[10px] pr-[15px] cursor-pointer'>
          <Plus size={20} className='text-white' />
          <p className='font-inter-medium text-[16px] leading-[20px] text-white'>Add a product</p>
        </div>
        <div className='flex gap-[15px]'>
          <div className='w-max flex gap-[10px] items-center'>
            <select name="" id="" className='bg-pink-shade h-max outline-0 border-[2px] border-text-secondary-black rounded-[4px]'>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            <p>Entries</p>
          </div>
          <div className='px-[15px] py-[10px] rounded-[4px] bg-pink-shade flex gap-[15px]'>
            <ArrowLeft size={16} className='text-text-normal-black cursor-pointer' />
            <ArrowRight size={16} className='text-text-normal-black cursor-pointer' />
          </div>
        </div>
      </div>

      <div className='w-full h-[calc(100dvh-170px)] px-[25px] mt-[30px] overflow-hidden'>
        <div className="w-full h-full border-[2px] border-white-border">
          {/* Table Header */}
          <div className="flex w-full items-center bg-pink-shade font-inter-medium text-[16px] leading-[24px] text-pink-accent h-[55px] px-[20px]">
            <div className="w-[35%] text-left">Product</div>
            <div className="w-[15%] text-center">Stock status</div>
            <div className="w-[15%] text-center">Published date</div>
            <div className="w-[15%] text-center">Published time</div>
            <div className="w-[15%] text-center">Last updated</div>
            <div className="w-[5%] text-right">Actions</div>
          </div>

          {/* Table Body with Scroll */}
          <div className="h-[calc(100%-55px)] overflow-y-auto scrollbar-hidden pb-[5px]">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="flex w-full items-center h-[55px] hover:bg-pink-shade border-t-[2px] border-white-border px-[20px]">
                <div className="w-[35%]">
                  <div className="flex gap-[15px] items-center">
                    <img src="/assets/images/handcrafted.jpg" alt="" className="w-[40px] object-cover aspect-square rounded-[8px]" />
                    <p className="w-[calc(100%-55px)] font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                      All Lorem ipsum dolor sit, amet consectetur adipisicing elit. lorem100
                    </p>
                  </div>
                </div>
                <div className="w-[15%] flex items-center justify-center">
                  <p className="w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white">out of stock</p>
                </div>
                <div className="w-[15%] text-center">12/12/2000</div>
                <div className="w-[15%] text-center">12:00</div>
                <div className="w-[15%] text-center">21/12/2000</div>
                <div className="w-[5%] flex justify-end gap-4">
                  <Pencil size={18} className="text-text-normal-black cursor-pointer" />
                  <Trash size={18} className="text-text-normal-black cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page