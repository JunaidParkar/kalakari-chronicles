"use client";

import Navbar from "@/components/navbar";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataLoader = () => {
      setLoading(true);
      setLoading(false);
    };
    dataLoader();
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div className="w-full h-[100dvh] fixed left-0 top-0 z-[500] backdrop-blur-lg flex justify-center items-center" style={loading ? { display: "flex" } : { display: "none" }}>
        <p className="font-inter-medium text-[20px] leading-[26px] text-text-normal-black">Loading...</p>
      </div>

      {/* Main Page Content */}
      <div style={loading ? { display: "none" } : { display: "block" }} className="w-full">
        <Navbar />

        <div className="w-full mt-[20px] flex gap-[20px] px-[125px]">
          {/* Left Image Section (Sticky) */}
          <div className="w-[calc(50%-10px)] h-full relative flex flex-wrap gap-[20px] overflow-hidden pb-[20px]">
            <img src="/handcrafted.jpg" className="w-[calc(50%-10px)] aspect-square rounded-[8px] object-cover" alt="" />
            <img src="/handcrafted.jpg" className="w-[calc(50%-10px)] aspect-square rounded-[8px] object-cover" alt="" />
            <img src="/handcrafted.jpg" className="w-[calc(50%-10px)] aspect-square rounded-[8px] object-cover" alt="" />
            <img src="/handcrafted.jpg" className="w-[calc(50%-10px)] aspect-square rounded-[8px] object-cover" alt="" />
            <div className="absolute p-[15px] bg-pink-shade left-[5px] top-[5px] cursor-pointer rounded-full z-10" onClick={() => router.back()} >
              <ArrowLeft className="text-pink-accent w-[30px]" />
            </div>
          </div>

          {/* Right Content Section (Scrollable) */}
          <div className="w-[calc(50%-10px)] h-full relative pl-[30px] scrollbar-hidden flex flex-col gap-[15px] justify-center">
            {/* Back Button */}
            <div className="absolute bottom-[30px] left-[50%] translate-x-[-50%] bg-pink-accent px-[15px] py-[10px] rounded-[30px]">
              <ArrowDown className="text-white" />
            </div>

            {/* Scrollable Content */}
            <h1 className="font-inter-bold text-[30px] text-text-normal-black leading-[35px] text-nowrap text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsumdoloremque rem, numquam asperiores sint magni</h1>
            <p className="font-inter-regular text-[15px] leading-[20px] text-text-secondary-black">Made by <span>Junaid Parkar</span></p>
            <h3 className="font-inter-medium text-[25px] leading-[30px] text-pink-accent">Rs. <span>500</span></h3>
            <div className="flex gap-[20px]">
              <div className="px-[20px] py-[10px] border-[1px] border-pink-accent bg-white text-pink-accent cursor-pointer rounded-[8px]"><p>Add to cart</p></div>
              <div className="px-[20px] py-[10px] border-[1px] border-pink-accent bg-pink-accent text-white cursor-pointer rounded-[8px]"><p>purchase now</p></div>
            </div>
          </div>
        </div>

        <div className="px-[125px] pb-[20px]">
          <div className="p-[15px] bg-pink-shade rounded-[8px]">
            <h1 className="font-inter-bold text-[25px] leading-[75px]">Product description</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit corrupti alias quis debitis delectus? Neque iste ratione eum nulla accusantium dolore nostrum mollitia fugit ullam explicabo, porro, non tenetur ipsum cumque voluptatem dolores. Ex illum ipsa atque quis blanditiis quo alias exercitationem minus harum suscipit possimus placeat quaerat inventore praesentium accusamus consectetur aliquid ducimus, molestias impedit eius aut sequi iusto dignissimos nam. Nesciunt dolores vitae aperiam nemo esse, optio eligendi expedita provident excepturi iste fugiat quo vel soluta natus numquam omnis dolor ea iure facere quae tempora officiis, officia ducimus! Harum est id architecto vitae aliquid? Tempore animi ipsam, veritatis ducimus nobis consequatur tempora eum aliquam aperiam recusandae, praesentium qui aspernatur nemo, quam illum doloremque assumenda a corporis obcaecati nisi. Ut accusantium odio laborum molestiae consectetur voluptas vero unde itaque dolore. Dolore repellat quas vel laboriosam nisi. Rem voluptatem deleniti vero at harum illo, aliquam reprehenderit vel, totam fuga labore beatae exercitationem voluptates quis. Vel corrupti, ipsam dignissimos maiores eveniet ad molestias perferendis ea quibusdam deleniti nostrum quis officia commodi accusantium atque voluptas fugiat sequi fuga. Rem excepturi in accusamus quos deleniti quibusdam fugiat! Quos, tenetur aut praesentium incidunt eveniet sapiente labore perferendis, corporis ullam debitis iure fugiat dolor sequi animi voluptas tempore? Unde provident alias animi facere totam, qui dolorum magnam maxime dolore tempora eos, voluptas in dicta id aut non sed obcaecati eaque inventore, debitis explicabo laborum reiciendis commodi? Aliquam sint veritatis nam! Nulla ut error expedita obcaecati, aliquam voluptatum, dolorum numquam fuga nobis quas eveniet voluptatibus molestiae. Impedit dolores magni sit, aliquid beatae magnam voluptatem est molestias, perferendis dolore similique perspiciatis quo rerum quis mollitia quasi! Corporis nostrum quos modi earum perferendis quidem eligendi laboriosam eveniet voluptatum eum? Qui officia id illo nostrum velit! Ex vero pariatur hic accusamus voluptatum. Eligendi accusamus sequi et obcaecati ratione amet corrupti nulla ipsam. Delectus impedit repudiandae, harum ex aliquid reiciendis dolorem facilis ducimus! Quasi nihil, sint possimus dolorum explicabo corporis architecto expedita consequuntur perferendis magni? Ab, optio voluptas. Eum perferendis magni, assumenda repellat error provident aperiam debitis veritatis consectetur veniam qui, fugiat accusamus dolores aliquam quae nam, labore est non vero itaque reiciendis. Architecto labore expedita eius adipisci fugiat aperiam voluptatibus ut veniam quia ipsam. Quod maxime voluptas reiciendis neque architecto itaque, saepe et? Quaerat architecto nihil porro placeat animi ut ex doloremque asperiores maxime, amet totam enim repudiandae quibusdam quos nisi cum illum eius laboriosam! Aliquid assumenda nostrum deserunt pariatur porro, commodi incidunt fugit soluta non! Expedita eligendi porro quis praesentium odit, unde aliquid! Quaerat, iste accusamus! Rerum illo error eaque aperiam mollitia saepe autem harum quis consequatur fuga? Soluta impedit cupiditate sit numquam, illo exercitationem aut illum aspernatur odio veritatis assumenda quidem, tempora quia alias voluptatem, modi voluptate perspiciatis rerum doloremque. Nam, incidunt! Quo, in fugit! Aperiam laborum aut autem, quibusdam dicta consectetur sunt beatae neque voluptatem, fugit quam eos illum ea? Provident enim quam iste porro nemo laborum quidem incidunt, molestias voluptatem animi esse. Vel ut doloremque voluptate odio pariatur, perspiciatis amet voluptatibus nihil porro! Veniam, exercitationem!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
