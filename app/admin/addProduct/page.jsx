"use client"
import React, { useRef, useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const Page = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [images, setImages] = useState([null, null, null, null])
    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: "Enter the descripton for the product..."
    }),
        []
    );

    const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a temporary URL
            const updatedImages = [...images];
            updatedImages[index] = imageUrl;
            setImages(updatedImages);
        }
    };
    

    return (
        <>
            <div className='w-full h-[75px] px-[25px] flex justify-between items-center bg-white border-0 border-b border-white-border'>
                <h3 className='font-inter-bold text-[24px] leading-[32px] text-pink-accent'>Admin Panel</h3>
                <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Sharvari Uttam Palande</p>
            </div>

            <div className='w-full h-[calc(100dvh-75px)] overflow-x-hidden overflow-y-auto px-[25px] pt-[30px]'>
                <h3 className='font-inter-bold text-[24px] leading-[30px] text-text-normal-black'>Add a new product</h3>
                <form className='w-full mt-[30px]'>
                    <div className='w-full flex gap-[20px] flex-wrap'>
                        <div className='border-[1px] border-white-border px-[15px] py-[10px] rounded-[8px] w-full'><input className='w-full h-full outline-0 font-inter-regular text-[16px] leading-[24px]' type="text" name="" id="" placeholder='Enter the name of the poduct' /></div>
                        <div className='border-[1px] border-white-border px-[15px] py-[10px] rounded-[8px] w-[calc(50%-10px)]'><input className='w-full h-full outline-0 font-inter-regular text-[16px] leading-[24px]' type="number" name="" id="" placeholder='Enter the price of the product' /></div>
                        <div className='border-[1px] border-white-border px-[15px] py-[10px] rounded-[8px] w-[calc(50%-10px)]'><input className='w-full h-full outline-0 font-inter-regular text-[16px] leading-[24px]' type="text" name="" id="" placeholder='Product Made By' /></div>
                    </div>
                    <div className='w-full mt-[20px]'>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => setContent(newContent)}
                        />
                    </div>
                    <div className='w-full mt-[20px] flex gap-[20px]'>
                        <label htmlFor="image1" className='w-[calc(25%-15px)] aspect-square border border-white-border flex justify-center items-center cursor-pointer rounded-[8px]'><p className='text-[16px] font-inter-regular leading-[24px] text-center' style={images[0] != null ? {display: "none"} : {display: "block"}}>Select Image 1</p><img src={images[0]} className='w-full h-full aspect-square object-cover rounded-[8px]' style={images[0] == null ? {display: "none"} : {display: "block"}} alt="" /></label>
                        <label htmlFor="image2" className='w-[calc(25%-15px)] aspect-square border border-white-border flex justify-center items-center cursor-pointer rounded-[8px]'><p className='text-[16px] font-inter-regular leading-[24px] text-center' style={images[1] != null ? {display: "none"} : {display: "block"}}>Select Image 2</p><img src={images[1]} className='w-full h-full aspect-square object-cover rounded-[8px]' style={images[1] == null ? {display: "none"} : {display: "block"}} alt="" /></label>
                        <label htmlFor="image3" className='w-[calc(25%-15px)] aspect-square border border-white-border flex justify-center items-center cursor-pointer rounded-[8px]'><p className='text-[16px] font-inter-regular leading-[24px] text-center' style={images[2] != null ? {display: "none"} : {display: "block"}}>Select Image 3</p><img src={images[2]} className='w-full h-full aspect-square object-cover rounded-[8px]' style={images[2] == null ? {display: "none"} : {display: "block"}} alt="" /></label>
                        <label htmlFor="image4" className='w-[calc(25%-15px)] aspect-square border border-white-border flex justify-center items-center cursor-pointer rounded-[8px]'><p className='text-[16px] font-inter-regular leading-[24px] text-center' style={images[3] != null ? {display: "none"} : {display: "block"}}>Select Image 4</p><img src={images[3]} className='w-full h-full aspect-square object-cover rounded-[8px]' style={images[3] == null ? {display: "none"} : {display: "block"}} alt="" /></label>
                        <input type="file" id='image1' accept="image/*" className='hidden' onChange={(e) => handleImageChange(e, 0)} />
                        <input type="file" id='image2' accept="image/*" className='hidden' onChange={(e) => handleImageChange(e, 1)} />
                        <input type="file" id='image3' accept="image/*" className='hidden' onChange={(e) => handleImageChange(e, 2)} />
                        <input type="file" id='image4' accept="image/*" className='hidden' onChange={(e) => handleImageChange(e, 3)} />
                    </div>
                </form>
                <div className='w-full mt-[20px] mb-[20px]'>
                    <div className='px-[20px] py-[15px] bg-pink-accent w-max rounded-[8px]'><p className='text-white font-inter-regular text-[16px] leading-[24px]'>Upload the product.</p></div>
                </div>
            </div>

        </>
    )
}

export default Page