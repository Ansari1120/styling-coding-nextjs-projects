import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseLayout = (props: {
  ExploreButtonID: string;
  Para: string;
  BackIndex: string;
  Heading: string;
  imgOne: any;
  imgTwo: any;
}) => {
  const { ExploreButtonID, Para, BackIndex, Heading, imgOne, imgTwo } = props;

  return (
    <>
      <div className="md:flex grid grid-cols-1  w-full items-center justify-around ">
        <Image
          className="md:ml-16 ml-8 md:mt-52  mt-42 md:w-[350px] w-[280px] md:h-[350px] h-[300px]"
          src={imgOne}
          width={350}
          height={350}
          alt="Image1"
        />
        <Image
          className="md:-ml-40  -ml-3 md:w-[350px] w-[280px] md:h-[350px] h-[300px]  mb-52"
          src={imgTwo}
          width={350}
          height={350}
          alt="Image2"
        />
        <div className="flex flex-col text-black md:mx-36mx-22 justify-items-start ">
          <h1 className="md:text-6xl text-4xl font-bold text-white border-l-8 border-indigo-500 md:p-4 p-2 mb-2">
            {Heading}
          </h1>
          <p className="mb-2 italic md:text-2xl text-md md:mx-0 mx-2">{Para}</p>
        
            <button className="bg-white text-indigo-500 hover:bg-indigo-300  rounded-lg m-auto p-2 font-semibold mt-5">
            <Link href={`/syllabus/${ExploreButtonID}`}>
              Learn More
              </Link>
            </button>
         

          <div className=" absolute text-gray-900 md:text-[200px]  text-[120px]  opacity-50   pb-0.5 ">
            {BackIndex}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLayout;
