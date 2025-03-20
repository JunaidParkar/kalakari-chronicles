import { Search, ShoppingCart, UserPen } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className='w-full px-[125px] border-0 border-b-[2px] border-white-border'>
        <div className='w-full h-[75px] flex items-center justify-between'>
          <h3 className='w-[25%] text-start font-inter-bold text-[24px] leading-[32px] text-text-normal-black'>Kalakari chronicles</h3>
          <div className='w-[50%] flex gap-[15px] items-center justify-between border-[1px] border-white-border h-[32px] px-[15px] rounded-[8px]'>
            <input type="text" name="" id="" placeholder='Search for handicrafted items...' className='w-[calc(100%-39px)] font-inter-regular text-[16px] leading-[24px] outline-0' />
            <Search size={24} className='text-text-normal-black cursor-pointer' />
          </div>
          <div className='flex flex-row items-center gap-[25px] w-[25%] justify-end'>
            <ShoppingCart size={24} color='#1F2937' className='cursor-pointer' />
            <UserPen size={24} color='#1F2937' className='cursor-pointer' />
            <div className='px-[15px] h-[32px] bg-pink-accent rounded-[8px] flex justify-center items-center cursor-pointer'><p className='font-inter-medium text-[16px] leading-[24px] text-white'>Sign in</p></div>
          </div>
        </div>
      </div>

      <div className='w-full px-[125px] flex gap-[15px] mt-[30px] h-[calc(100dvh-107px)]'>
        <div className='h-max w-[calc(20%-7.5px)] rounded-[8px] bg-white drop-shadow-md px-[20px] py-[25px] flex flex-col gap-[15px]'>
          <h3 className='font-inter-bold text-[20px] leading-[28px] text-text-normal-black'>Filter</h3>
          <div className='w-full'>
            <h3 className='font-inter-medium text-[16px] leading-[24px] text-text-normal-black mb-[7px]'>Categories</h3>
            <div className='w-full'>
              <ul className='w-full'>
                <li className='flex gap-[10px] w-full'><input type="checkbox" name="" id="" className='accent-text-secondary-black' /> <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black  overflow-ellipsis overflow-hidden whitespace-nowrap'>All</p></li>
                <li className='flex gap-[10px] w-full'><input type="checkbox" name="" id="" className='accent-text-secondary-black' /> <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black  overflow-ellipsis overflow-hidden whitespace-nowrap'>All</p></li>
                <li className='flex gap-[10px] w-full'><input type="checkbox" name="" id="" className='accent-text-secondary-black' /> <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black  overflow-ellipsis overflow-hidden whitespace-nowrap'>All</p></li>
                <li className='flex gap-[10px] w-full'><input type="checkbox" name="" id="" className='accent-text-secondary-black' /> <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black  overflow-ellipsis overflow-hidden whitespace-nowrap'>All</p></li>
                <li className='flex gap-[10px] w-full'><input type="checkbox" name="" id="" className='accent-text-secondary-black' /> <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black  overflow-ellipsis overflow-hidden whitespace-nowrap'>All</p></li>
              </ul>
            </div>
          </div>
          <div className='w-full'>
            <h3 className='font-inter-medium text-[16px] leading-[24px] text-text-normal-black mb-[7px]'>Price range</h3>
            <div className='w-full'>
              <ul className='w-full flex gap-[15px]'>
                <li className='flex gap-[10px] w-[calc(50%-7.5px)]'><input type="number" name="" id="" className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black border-[1px] border-white-border w-full px-[10px] py-[5px] rounded-[8px]' placeholder='Min' /></li>
                <li className='flex gap-[10px] w-[calc(50%-7.5px)]'><input type="number" name="" id="" className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black border-[1px] border-white-border w-full px-[10px] py-[5px] rounded-[8px]' placeholder='Max' /></li>
              </ul>
            </div>
          </div>
          <div className='w-full'>
            <h3 className='font-inter-medium text-[16px] leading-[24px] text-text-normal-black mb-[7px]'>Sort By</h3>
            <div className='w-full'>
              <select name="" id="" className='bg-white drop-shadow-md border-[1px] border-white-border rounded-[8px] font-inter-regular text-[16px] leading-[24px] px-[10px] py-[5px] w-full'>
                <option value="Relevant">Relevant</option>
                <option value="Newest First">Newest First</option>
                <option value="Price Low To High">Price Low To High</option>
                <option value="Price High To Low">Price High To Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className='w-[calc(80%-7.5px)] h-full rounded-[8px] flex gap-[20px] flex-wrap overflow-x-hidden overflow-y-auto pb-[20px] scrollbar-hidden'>
          <div className='w-[calc(25%-15px)] h-max flex flex-col gap-[7px] drop-shadow-md bg-white pb-[20px] rounded-[8px] shrink-0'>
            <img src="/assets/images/handcrafted.jpg" alt="category" className='w-full aspect-square object-cover rounded-t-[8px]' />
            <div className='w-full flex flex-col gap-[7px] px-[20px]'>
              <h5 className='w-full font-inter-medium text-[18px] leading-[28px] text-text-normal-black overflow-hidden overflow-ellipsis whitespace-nowrap'>Ceramic vase</h5>
              <p className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Rs. <span>89.99</span></p>
              <p className='font-inter-regular text-[14px] leading-[20px] text-text-secondary-black'>By Sharvari Palande</p>
              <div className='w-full border-[2px] border-pink-accent py-[5px] flex justify-center items-center rounded-[8px]'>
                <p className='font-inter-medium text-[16px] leading-[24px] text-pink-accent'>Add to cart</p>
              </div>
            </div>
          </div>
          <div className='w-[calc(25%-15px)] h-max flex flex-col gap-[7px] drop-shadow-md bg-white pb-[20px] rounded-[8px] shrink-0'>
            <img src="/assets/images/handcrafted.jpg" alt="category" className='w-full aspect-square object-cover rounded-t-[8px]' />
            <div className='w-full flex flex-col gap-[7px] px-[20px]'>
              <h5 className='w-full font-inter-medium text-[18px] leading-[28px] text-text-normal-black overflow-hidden overflow-ellipsis whitespace-nowrap'>Ceramic vase</h5>
              <p className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Rs. <span>89.99</span></p>
              <p className='font-inter-regular text-[14px] leading-[20px] text-text-secondary-black'>By Sharvari Palande</p>
              <div className='w-full border-[2px] border-pink-accent py-[5px] flex justify-center items-center rounded-[8px]'>
                <p className='font-inter-medium text-[16px] leading-[24px] text-pink-accent'>Add to cart</p>
              </div>
            </div>
          </div>
          <div className='w-[calc(25%-15px)] h-max flex flex-col gap-[7px] drop-shadow-md bg-white pb-[20px] rounded-[8px] shrink-0'>
            <img src="/assets/images/handcrafted.jpg" alt="category" className='w-full aspect-square object-cover rounded-t-[8px]' />
            <div className='w-full flex flex-col gap-[7px] px-[20px]'>
              <h5 className='w-full font-inter-medium text-[18px] leading-[28px] text-text-normal-black overflow-hidden overflow-ellipsis whitespace-nowrap'>Ceramic vase</h5>
              <p className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Rs. <span>89.99</span></p>
              <p className='font-inter-regular text-[14px] leading-[20px] text-text-secondary-black'>By Sharvari Palande</p>
              <div className='w-full border-[2px] border-pink-accent py-[5px] flex justify-center items-center rounded-[8px]'>
                <p className='font-inter-medium text-[16px] leading-[24px] text-pink-accent'>Add to cart</p>
              </div>
            </div>
          </div>
          <div className='w-[calc(25%-15px)] h-max flex flex-col gap-[7px] drop-shadow-md bg-white pb-[20px] rounded-[8px] shrink-0'>
            <img src="/assets/images/handcrafted.jpg" alt="category" className='w-full aspect-square object-cover rounded-t-[8px]' />
            <div className='w-full flex flex-col gap-[7px] px-[20px]'>
              <h5 className='w-full font-inter-medium text-[18px] leading-[28px] text-text-normal-black overflow-hidden overflow-ellipsis whitespace-nowrap'>Ceramic vase</h5>
              <p className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Rs. <span>89.99</span></p>
              <p className='font-inter-regular text-[14px] leading-[20px] text-text-secondary-black'>By Sharvari Palande</p>
              <div className='w-full border-[2px] border-pink-accent py-[5px] flex justify-center items-center rounded-[8px]'>
                <p className='font-inter-medium text-[16px] leading-[24px] text-pink-accent'>Add to cart</p>
              </div>
            </div>
          </div>
          <div className='w-[calc(25%-15px)] h-max flex flex-col gap-[7px] drop-shadow-md bg-white pb-[20px] rounded-[8px] shrink-0'>
            <img src="/assets/images/handcrafted.jpg" alt="category" className='w-full aspect-square object-cover rounded-t-[8px]' />
            <div className='w-full flex flex-col gap-[7px] px-[20px]'>
              <h5 className='w-full font-inter-medium text-[18px] leading-[28px] text-text-normal-black overflow-hidden overflow-ellipsis whitespace-nowrap'>Ceramic vase</h5>
              <p className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Rs. <span>89.99</span></p>
              <p className='font-inter-regular text-[14px] leading-[20px] text-text-secondary-black'>By Sharvari Palande</p>
              <div className='w-full border-[2px] border-pink-accent py-[5px] flex justify-center items-center rounded-[8px]'>
                <p className='font-inter-medium text-[16px] leading-[24px] text-pink-accent'>Add to cart</p>
              </div>
            </div>
          </div>
          <div className='w-[calc(25%-15px)] h-max flex flex-col gap-[7px] drop-shadow-md bg-white pb-[20px] rounded-[8px] shrink-0'>
            <img src="/assets/images/handcrafted.jpg" alt="category" className='w-full aspect-square object-cover rounded-t-[8px]' />
            <div className='w-full flex flex-col gap-[7px] px-[20px]'>
              <h5 className='w-full font-inter-medium text-[18px] leading-[28px] text-text-normal-black overflow-hidden overflow-ellipsis whitespace-nowrap'>Ceramic vase</h5>
              <p className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Rs. <span>89.99</span></p>
              <p className='font-inter-regular text-[14px] leading-[20px] text-text-secondary-black'>By Sharvari Palande</p>
              <div className='w-full border-[2px] border-pink-accent py-[5px] flex justify-center items-center rounded-[8px]'>
                <p className='font-inter-medium text-[16px] leading-[24px] text-pink-accent'>Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page