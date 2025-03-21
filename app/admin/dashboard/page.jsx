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

      <div className='w-full h-[calc(100dvh-170px)] px-[25px] mt-[30px]'>
        <div className='w-full h-full px-[20px] py-[25px] drop-shadow-md bg-white rounded-[8px]'>

        <table className='w-full max-h-full table-fixed text-center border-collapse border-white-border overflow-x-hidden overflow-y-auto'>
          <thead>
            <tr className='w-full font-inter-medium text-[16px] leading-[24px] text-pink-accent h-[55px]'>
              <th className='w-[35%] text-left'>Product</th>
              <th className='w-[15%]'>Stock status</th>
              <th className='w-[15%]'>Published date</th>
              <th className='w-[15%]'>Published time</th>
              <th className='w-[15%]'>Last updated</th>
              <th className='w-[5%] text-right'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr className='h-[55px] hover:bg-pink-shade hover:rounded-[8px] hover:overflow-hidden'>
              <td>
                <div className='flex gap-[15px] items-center'>
                  <img src="/assets/images/handcrafted.jpg" alt="" srcset="" className='w-[40px] object-cover aspect-square rounded-[8px]' /><p className='font-inter-regular text-[16px] leading-[24px] overflow-hidden overflow-ellipsis whitespace-nowrap'>All Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis soluta voluptate fuga nisi iste nemo? Facere, harum nobis aperiam nesciunt officia facilis quas totam deleniti pariatur eveniet earum voluptates distinctio nulla perspiciatis a temporibus odit velit odio, cum aspernatur error quidem ea! Nulla, ullam eaque. Labore rem harum rerum veritatis dolor debitis sit voluptatem dignissimos illum. Libero illum eius autem necessitatibus quia sed ipsum maxime, sapiente iste, ea, praesentium temporibus harum tenetur nobis corporis voluptatibus soluta tempore numquam. Quas hic nemo eveniet quidem sapiente a, odio error molestias, repellat veniam modi eaque delectus eum quos voluptatibus facere? Eos, culpa?</p>
                </div>
              </td>
              <td>
                <div className='flex items-center justify-center'>
                  <p className='w-max px-[10px] py-[3px] rounded-[4px] bg-pink-accent text-white'>out of stock</p>
                </div>
              </td>
              <td>
                12/12/2000
              </td>
              <td>12:00</td>
              <td>21/12/2000</td>
              <td>
                <div className='flex gap-[15px] items-center justify-end w-full'>
                  <Pencil size={18} className='text-text-normal-black cursor-pointer' />
                  <Trash size={18} className='text-text-normal-black cursor-pointer' />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default Page