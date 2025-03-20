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

      <div className='w-full px-[125px] flex gap-[15px]'>
        <div className='h-full w-[calc(25%-7.5px-125px)] rounded-[8px] bg-white drop-shadow-md px-[20px] py-[25px]'>
          <h3 className='font-inter-bold text-[20px] leading-[28px] text-text-normal-black'>Filter</h3>
          <div>
            <h3 className='font-inter-medium text-[16px] leading-[24px] text-text-normal-black'>Categories</h3>
            <div>
              <ul>
                <li className='flex gap-[10px]'><input type="checkbox" name="" id="" className='accent-text-secondary-black' /> <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>All Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto alias praesentium. Nobis consectetur qui consequuntur unde maxime nam quo optio, praesentium animi? Beatae ducimus quas laborum sed esse architecto sequi tenetur dicta dolor. Adipisci dolore temporibus minima eius ab beatae delectus non voluptate eos, architecto molestiae facere numquam! Repellendus, atque modi similique omnis sint itaque laboriosam doloremque saepe dolore reiciendis fugiat ratione accusamus. Perferendis perspiciatis cum facilis eveniet! Cumque veniam fuga, explicabo reprehenderit ab similique numquam sit commodi, quos itaque quidem voluptatum facilis iure nobis deleniti porro odit vero quibusdam pariatur nesciunt. Eligendi esse repellendus qui ex beatae! Officiis labore eos dolores placeat quod ut sed minima voluptates. Adipisci aperiam suscipit laboriosam at mollitia commodi nobis optio, voluptatum, et nulla non ipsa qui!</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='h-full w-[(75%-7.5px)] rounded-[8px]'></div>
      </div>
    </>
  )
}

export default Page