import React from 'react';

import { featuredProducts } from "@/Data";
import Image from "next/image";

const Featured = () => {
  return (
    <div><h1 className="text-uppercase text-red-900 xl:text-6xl xl:mx-35 mx-8 font-bold my-10 text-[3rem] md:text-5xl">Surprise for your loved One</h1>
    <div className="w-screen overflow-x-scroll bg-zinc-50 text-black-500">
       
      {/* WRAPPER */}
      <div className="w-max flex">
      
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-[60vw] h-[50vh] m-6 rounded-lg flex flex-col items-center justify-around p-4 border-4 bg-yellow-600 transition-all duration-300 md:w-[50vw] xl:w-[23vw] xl:h-[60vh] overflow-hidden"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full  hover:scale-110 transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain rounded-lg " />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
             
              <span className="text-xl font-bold">₹{item.price}</span>
              <button className="bg-red-700 text-white p-4 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> 
     </div>
  );
};

export default Featured;