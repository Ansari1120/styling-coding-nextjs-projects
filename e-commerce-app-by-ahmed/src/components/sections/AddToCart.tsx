"use client";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { cartActions } from "@/app/store/slice/cartSlice";
import { toast } from "react-hot-toast";

const AddToCart = ({ item }: any) => {
  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,
      }),
    });
    const result = await res.json();
    console.log("added to the cart : ", result);
    const dispatch = useDispatch();
    dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    toast.success("Product added");
  };
  return (
    <>
      <Button onClick={() => handleAddToCart()} className=" my-4 text-md">
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
