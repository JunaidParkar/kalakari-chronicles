"use client"

import Navbar from '@/components/navbar';
import axios from 'axios';
import { ChevronsLeft, ChevronsRight, Instagram, MessageCircle, Search, ShoppingCart, UserPen } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const Page = () => {

  const router = useRouter()

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true); // Assume it can scroll right initially
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Function to check scroll position
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth
      );
    }
  };

  // Function to scroll left/right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.firstChild.offsetWidth + 15; // Get the width of one item + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth"
      });
    }
  };


  // Listen for scroll changes
  useEffect(() => {
    checkScrollPosition();
    const handleScroll = () => checkScrollPosition();
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    const fetchProducts = async () => {
      setLoading(true)
      await axios.post("http://localhost:5000/local/getHomePage").then(data => {
        let resp = data.data
        setCategories(resp.categories)
        setProducts(resp.newArrivals)
      }).catch(e => {
        alert(error)
      })
      setLoading(false)
    }

    fetchProducts()
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);



  return (
    <>
      <div className='w-full h-[100dvh] fixed left-0 top-0 z-[500] backdrop-blur-lg flex justify-center items-center' style={loading ? { display: "flex" } : { display: "none" }}><p className='font-inter-medium text-[20px] leading-[26px] text-text-normal-black'>Loading...</p></div>
      <div className='w-full h-full' style={loading ? { display: "none" } : { display: "block" }}>
        <Navbar />

        <div className="w-full h-[550px] bg-[url('/assets/images/handcrafted.jpg')] bg-cover bg-center mt-[20px]">
          <div className='w-full h-full bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))] flex flex-col gap-[15px] justify-center items-center'>
            <h3 className='font-inter-regular text-[48px] leading-[48px] text-white'>Handcrafted with love</h3>
            <p className='font-inter-regular text-[20px] leading-[28px] text-white'>Discover unique artisan creations</p>
            <div className='w-max px-[20px] h-[37px] bg-pink-accent rounded-[8px] flex justify-center items-center cursor-pointer'><p className='font-inter-medium text-[16px] leading-[24px] text-white'>Sign in</p></div>
          </div>
        </div>

        <div className='w-full px-[125px] relative pt-[30px] flex flex-col gap-[20px]'>
          <h3 className='font-inter-bold text-[30px] leading-[36px] text-text-normal-black'>Shop by category</h3>

          {/* Left Arrow (Outside the scroll div) */}
          {canScrollLeft && (
            <div
              className='absolute top-[50%] left-[125px] -translate-y-1/2 p-[25px] bg-pink-accent rounded-full cursor-pointer drop-shadow-md z-10'
              onClick={() => scroll("left")}
            >
              <ChevronsLeft className='text-white' />
            </div>
          )}

          {/* Scrollable Div */}
          <div
            ref={scrollRef}
            className='w-full overflow-x-auto flex gap-[20px] snap-x snap-mandatory scroll-smooth scrollbar-hidden'
          >
            {
              categories && categories.length > 0 ? categories.map((cat, index) => (
                <div key={index} className='w-[calc(25%-15px)] shrink-0 aspect-[9/10] snap-start flex flex-col justify-between'>
                  <img src="/assets/images/handcrafted.jpg" alt="category" className='w-full aspect-square object-cover rounded-[8px]' />
                  <p className='font-inter-regular text-[20px] leading-[28px] text-text-normal-black w-full overflow-hidden overflow-ellipsis whitespace-nowrap mt-[15px]'>{cat}</p>
                </div>
              )) : ""
            }
          </div>

          {/* Right Arrow (Outside the scroll div) */}
          {canScrollRight && (
            <div
              className='absolute top-[50%] right-[125px] -translate-y-1/2 p-[25px] bg-pink-accent rounded-full cursor-pointer drop-shadow-md z-10'
              onClick={() => scroll("right")}
            >
              <ChevronsRight className='text-white' />
            </div>
          )}
        </div>


        <div className='w-full px-[125px] mt-[50px] flex flex-col gap-[20px]'>
          <h3 className='font-inter-bold text-[30px] leading-[36px] text-text-normal-black'>New arrivals</h3>
          <div className='w-full flex gap-[20px]'>
            {
              products && products.length > 0 ? products.map((prod, index) => (
                <div key={index} className='w-[calc(25%-15px)] flex flex-col gap-[7px] drop-shadow-md bg-white pb-[20px] rounded-[8px]'>
                  <img src={prod.images[0]} alt="category" className='w-full aspect-square object-cover rounded-t-[8px]' />
                  <div className='w-full flex flex-col gap-[7px] px-[20px]'>
                    <h5 className='w-full font-inter-medium text-[18px] leading-[28px] text-text-normal-black overflow-hidden overflow-ellipsis whitespace-nowrap'>{prod.name}</h5>
                    <p className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Rs. <span>{prod.price}</span></p>
                    <p className='font-inter-regular text-[14px] leading-[20px] text-text-secondary-black'>By {prod.madeBy}</p>
                    <div className='w-full border-[2px] border-pink-accent py-[5px] flex justify-center items-center rounded-[8px]' onClick={() => router.push(`/product/${prod.id}`)}>
                      <p className='font-inter-medium text-[16px] leading-[24px] text-pink-accent'>View product</p>
                    </div>
                  </div>
                </div>
              )) : ""
            }
          </div>
        </div>


        <div className='w-full bg-pink-shade h-[400px] mt-[50px] flex flex-col justify-center items-center gap-[20px]'>
          <h3 className='font-inter-bold text-[30px] leading-[36px] text-text-normal-black'>Join our creative community.</h3>
          <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Subscribe to receive updates about new artisan products and special offers</p>
          <div className='flex gap-[15px]'>
            <input type="text" className='w-[350px] px-[15px] h-[35px] outline-0 bg-white drop-shadow-md rounded-[8px] font-inter-regular text-[16px] leading-[24px] text-text-normal-black' disabled value="youremail@gmail.com" />
            <div className='px-[20px] h-[35px] outline-0 bg-pink-accent drop-shadow-md rounded-[8px] font-inter-regular text-[16px] leading-[24px] text-white flex justify-center items-center cursor-pointer'><p>Subscribe</p></div>
          </div>
        </div>

        <div className='w-full flex items-start justify-between px-[125px] mt-[50px]'>
          <div className='w-[calc(100%/3)] flex flex-col gap-[5px]'>
            <h3 className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>About us</h3>
            <p className='font-inter-regular text-[14px] leading-[22px] text-text-secondary-black'>Kalakari Chronicles celebrates handmade artistry and craftsmanship, bringing unique pieces to art lovers worldwide.</p>
          </div>
          <div className='w-[calc(100%/3)] flex items-center justify-center'>
            <div className='w-max flex flex-col gap-[5px]'>
              <div className='flex gap-[10px]'><h3 className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Location:</h3> <p className='font-inter-regular text-[14px] leading-[22px] text-text-secondary-black'>Mumbai</p></div>
              <div className='flex gap-[10px]'><h3 className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Managed by:</h3> <p className='font-inter-regular text-[14px] leading-[22px] text-text-secondary-black'>Sharvari Uttam Palande</p></div>
              <div className='flex gap-[10px]'><h3 className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Manufacturing process:</h3> <p className='font-inter-regular text-[14px] leading-[22px] text-text-secondary-black'>Handmade</p></div>
            </div>
          </div>
          <div className='w-[calc(100%/3)] flex justify-end'>
            <div className='w-max flex flex-col gap-[5px]'>
              <h3 className='font-inter-bold text-[16px] leading-[24px] text-pink-accent'>Connect us on</h3>
              <div className='flex gap-[20px]'>
                <div className='bg-pink-shade p-[15px] rounded-full drop-shadow-md'>
                  <MessageCircle size={16} className='text-text-secondary-black aspect-square' />
                </div>
                <div className='bg-pink-shade p-[15px] rounded-full drop-shadow-md'>
                  <Instagram size={16} className='text-text-secondary-black aspect-square' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className=' mt-[20px] font-inter-regular text-[12px] w-full text-center'>@2025 Kalakari chronicles. All rights reserved.</p>
      </div>
    </>
  )
}

export default Page