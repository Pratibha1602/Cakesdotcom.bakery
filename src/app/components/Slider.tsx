"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh and Indulge in Deliciousness ",
    image: "/slider1.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in India",
    image: "/slider2.jpg",
  },
  {
    id: 3,
    title: "We provide best Cake to share with your family",
    image: "/slider3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-yellow-600 ">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8  text-black font-bold bg-no-repeat bg-fixed bg-contain bg-[url('/ballon3.png')]">
        <h1 className="text-3xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-black rounded-md text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
