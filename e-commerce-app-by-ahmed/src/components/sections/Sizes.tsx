"use client";
import { cartActions } from "@/app/store/slice/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Sizes = () => {
  const dispatch = useDispatch();
  const sizes = ["xs", "sm", "md", "lg", "xl"];
  const [select, setSelect] = useState("");

  const handleSizeClick = (size: string) => {
    // setSelect(size);
    // onClick(size); // Invoke the onClick function with the selected size
    dispatch(
      cartActions.NoOfItems({
        size: size,
        Items: 0,
        checkHit: null,
      })
    );
  
  };
 
  //console.log(select);

  return (
    <>
      <div className="flex gap-x-3">
        {sizes.map((x: string, ind: number) => {
          return (
            <div
              key={ind}
              onClick={() => handleSizeClick(x)}
              className="flex w-10 h-10  items-center justify-center mt-2 duration-300 border rounded-full hover:shadow-xl"
            >
              <span className="text-[15px] font-semibold text-center text-gray-600 capitalize">
                {x}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sizes;
