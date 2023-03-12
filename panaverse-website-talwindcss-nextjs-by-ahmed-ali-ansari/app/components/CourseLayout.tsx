import Image from "next/image";
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
      <div className="flex w-full items-center justify-around ">
        <Image
          className=" ml-16 mt-52"
          src={imgOne}
          width={400}
          height={400}
          alt="AiImage"
        />
        <Image
          className=" -ml-40 "
          src={imgTwo}
          width={300}
          height={300}
          alt="Ai2Image"
        />
        <div className="flex flex-col text-black mx-32  justify-items-start ">
          <h1 className="text-6xl font-bold text-white border-l-8 border-indigo-500 p-4 mb-2">
            {Heading}
          </h1>
          <p className="mb-2">{Para}</p>
          <button className="  bg-white text-indigo-500 hover:bg-indigo-300 hover: text-black rounded-lg m-auto p-2 font-semibold">
            Learn More
          </button>
          <div className=" absolute text-gray-900 text-[160px] opacity-50   pb-0.5">{BackIndex}</div>
        </div>
      </div>
    </>
  );
};

export default CourseLayout;
