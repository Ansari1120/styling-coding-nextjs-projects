import React from "react";
import Fm from "../.../../../../public/p1.png";
import Fm2 from "../.../../../../public/image.webp";
import m1 from "../.../../../../public/m1.png";
import m2 from "../.../../../../public/m2.png";
import Image from "next/image";
import Link from "next/link";
const ProductCorousel = () => {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-3 ">
        <p className="text-blue-600 text-lg ">Promotions</p>
        <h1 className="text-3xl text-gray-800 font-bold">
          Our Promotional Event
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-[1rem] mb-10 ">
          <div className=" flex flex-col md:flex-row bg-[#D6D6D8] color-[#212121] pt-8">
            <div className="mx-auto lg:pl-9 lg:mr-40">
              <h3 className="lg:text-4xl  font-bold text-3xl">
                GET UP TO <br /> 60%
              </h3>
              <p className="lg:text-2xl font-light text-lg">
                For the summer <br />
                season
              </p>
            </div>
            <div>
              <Image src={Fm2} alt="event" />
            </div>
          </div>

          <div className=" bg-gray-800 text-white text-center p-6">
            <h3 className="text-4xl font-bold ">GET 30% Off</h3>
            <p className="mt-4">USE PROMO CODE</p>
            <button className=" bg-gray-700 px-7 py-3 rounded-xl mt-4">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[1rem] pb-10">
          <div className="pt-[1.5rem] px-4 bg-[#d0beb0] lg:ml-10">
            <div className="w-auto text-center text-lg">
              <p>Flex Sweatshirt</p>
              <div className="mb-24">
                <span className="line-through mr-3">$100.00</span>
                <span className="underline text-black font-bold">$75.00</span>
              </div>
            </div>
            <Image src={m2} alt="event" />
          </div>

          <div className="pt-[1.5rem] px-4 bg-[#D7D7D9]">
            <div className="w-auto text-center text-lg">
              <p>Flex Push Button Bomber</p>
              <div className="mb-24">
                <span className="line-through mr-3">$225.00</span>
                <span className="underline text-black font-bold">$190.00</span>
              </div>
            </div>
            <Image src={m1} alt="event" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCorousel;
