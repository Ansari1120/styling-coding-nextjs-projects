"use client";

import { cartActions } from "@/app/store/slice/cartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Quantity = ({ productId, quantity }: any) => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(quantity ? quantity : 0);
  const [hit, setHit] = useState(false);
  const incrementProdQuantity = () => {
    setHit(true);
    setNum(num + 1);
    dispatch(cartActions.NoOfItems({ Items: 1, checkHit: hit })); // Dispatch the addToCart action with the updated product and quantity
    setHit(false);
  };
  const decrementProdQuantity = () => {
    setNum(num <= 1 ? 0 : num - 1);
    dispatch(cartActions.removeFromCart(productId)); // Dispatch the addToCart action with the updated product and quantity
    console.log("dispatched sucessfully:");
  };
  return (
    <div className="flex items-center gap-x-2">
      {/* Minus */}
      <button
        onClick={() => decrementProdQuantity()}
        className="w-10 h-10 border rounded-full center font-bold bg-slate-200"
      >
        -
      </button>
      {/* Number */}
      <span className="text-xl">{num}</span>
      {/* Plus */}
      <button
        className="w-10 h-10 border rounded-full center  font-bold border-black"
        onClick={() => incrementProdQuantity()}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
