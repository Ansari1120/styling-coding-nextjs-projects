"use client";
import { useDispatch } from "react-redux";
//import { cartActions } from "@/store/slice/cartSlice";
import toast from "react-hot-toast";
import { Button } from "./button";
import { cartActions } from "@/app/store/slice/cartSlice";

const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    toast.success("Product added");
  };
  return <Button onClick={addItem}>Add to Cart</Button>;
};
export default AddToCart;