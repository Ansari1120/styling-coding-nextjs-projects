import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const FacultyLayout = ({ facultyData }: any) => {
  return (
    <>
      <h1 className=" md:mt-0 mt-[1100px] text-4xl text-center font-bold text-slate-500 border-l-4 border-blue-500 ">
        Faculty
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:mt-6 mt-[100px] ">
        {facultyData.map((x: any, i: number) => {
          return (
            <div
              key={i}
              className=" rounded-xl bg-slate-300 shadow-2xl text-black border items-center justify-center md:mx-16 mx-4 my-8 p-10 "
            >
              <div className="flex flex-row">
                <div>
                  <Image
                    src={x.img}
                    alt={x.Name}
                    width={400}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <div className="ml-5">
                  <div className=" text-xl font-semibold  text-black">
                    {x.Name}
                  </div>
                  <div className=" text-base font-medium text-gray-600 italic">
                    {x.Label}
                  </div>
                  <div className=" text-sm font-serif text-black font-normal">
                    {x.desc}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FacultyLayout;
