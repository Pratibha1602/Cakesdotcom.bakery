import React from 'react';

import { CustomcakesProducts, featuredProducts } from "@/Data";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-screen bg-yellow-600 text-black-500">
       <h1 className="text-uppercase text-red-900 xl:text-6xl xl:mx-35 mx-8 font-bold my-10 text-[3rem] md:text-5xl">Customize Cake</h1>
      {/* WRAPPER */}
      <div className=" flex flex-wrap ">
       
        {/* SINGLE ITEM */}
        {CustomcakesProducts.map((item) => (
          <div
            key={item.id}
            className="w-[38vw] h-[30vh] m-10 rounded-lg flex flex-col items-center justify-around p-4 bg-zinc-50  transition-all duration-300
             md:w-[50vw] xl:w-[28vw] xl:h-[60vh] "
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full transition-all duration-500 bg-cover " style={{ backgroundImage: `url(${item.img})`}}>
                {/* <Image src={item.img} alt="" fill className="object-contain rounded-lg " /> */}
                 {/* TEXT CONTAINER */}
           
              </div>
              )}
             {/* <div className="  flex flex-col items-center justify-bottom text-center gap-4"> */}
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
             
              {/* <span className="text-xl font-bold">${item.price}</span> */}
              <button className="bg-red-700 text-white p-4 rounded-md">
                Contact Us
              </button>
            {/* </div> */}
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;