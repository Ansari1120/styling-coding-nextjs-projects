"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

interface propTypes {
  posts: any;
  pageNumb: any;
  page: any;
}
export const PaginationBar: React.FC<propTypes> = ({
  posts,
  pageNumb,
  page,
}) => {
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(4);
  const numbersArray = Array.from({ length: posts }, (_, index) => index + 1);

  const highlight = (number: number, e: any) => {
    e.stopPropagation();
    console.log(number);
    pageNumb(number);
  };

  return (
    <li className="mt-8 flex py-19 gap-5 justify-center items-center text-lg font-semibold text-black dark:text-white">
      <ChevronLeft
        className="cursor-pointer hover:animate-ping"
        onClick={(e) => {
          if (sliceStart >= 1 && sliceEnd >= 4) {
            e.stopPropagation();
            setSliceStart((prev: number) => prev - 1);
            setSliceEnd((prev: number) => prev - 1);
          }
        }}
      />
      {numbersArray.slice(sliceStart, sliceEnd).map((number) => {
        return (
          <div
            onClick={(e) => highlight(number, e)}
            className={`${
              page === number ? "bg-gray-400 rounded-md" : ""
            } py-2 px-4 cursor-pointer transition-all`}
          >
            {number}
          </div>
        );
      })}
      <ChevronRight
        className="cursor-pointer hover:animate-ping"
        onClick={(e) => {
          if (sliceEnd <= posts && sliceStart <= posts) {
            e.stopPropagation();
            setSliceStart((prev: number) => prev + 1);
            setSliceEnd((prev: number) => prev + 1);
          }
        }}
      />
    </li>
  );
};
