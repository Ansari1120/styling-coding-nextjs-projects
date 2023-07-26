"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { cartActions } from "@/app/store/slice/cartSlice";
import { toast } from "react-hot-toast";
import GetAddedData from "@/app/api/get";
import { getMethod } from "@/app/api/calls";

const AddToCart = ({ item }: any) => {
  const dispatch = useDispatch();
  //   const user_id = cookies().get("user_id");
  // const data = GetAddedData();
  // console.log(data);
  const itemsAdd = useSelector((state: RootState) => state.cart.multiItems);
  const check = useSelector((state: RootState) => state.cart.checkHit);
  const size = useSelector((state: RootState) => state.cart.size);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleStateUpdate = () => {
    if (check) {
      dispatch(
        cartActions.addToCart({
          methd: "post",
          product: item,
          quantity: itemsAdd,
        })
      ); // Dispatch the addToCart action with the updated product and quantity
      //console.log('check true',totalAmount,item.category.name)
    } else {
      dispatch(
        cartActions.addToCart({ methd: "post", product: item, quantity: 1 })
      ); // Dispatch the addToCart action with the updated product and quantity
      //  console.log(item.price,item.category.name)
    }
    //console.log(totalAmount);
    toast.success("Product added");
  };
  const handleAddToCart = async () => {
    const res = await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({
        product_id: item.id,
        quantity: totalQuantity,
        size: size,
        price: check ? totalAmount : item.price,
        type: item.type,
        category: item.category.name,
      }),
    });
    const result = await res.json();
    console.log("added to the cart : ", result);
  };

  const settoGlobalstateData = async () => {
    try {
      const response = await fetch("/api/add", {
        method: "GET",
      });
      const result = await response.json();
      console.log("Cart items:", result);
    } catch (error) {
      console.error("Error getting cart items:", error);
    }
  };
  // const checkput = async () => {
  //   try {
  //     const res = await fetch("/api/add", {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         user_id: UID,
  //         product_id: item.id,
  //         quantity: 3,
  //         size: "xs",
  //         price: 212,
  //         type: "jackets",
  //         category: "female",
  //       }),
  //     });
  //     const result = await res.json();
  //     console.log("cart data updated : ", result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const checkdelete = async () => {
  //   try {
  //     const res = await fetch(`/api/add?user_id=${UID}&product_id=${item.id}`, {
  //       method: "DELETE",
  //     });
  //     const result = await res.json();
  //     console.log("data deleted sucessfully : ", result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchApiForAllCartItems = async () => {
  //   try {
  //     const response = await getMethod(item.id);
  //     dispatch(cartActions.addToCart({ product: response, quantity: 0 }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchApiForAllCartItems();
  // }, []);

  return (
    <>
      <Button
        onClick={() => {
          handleStateUpdate();
          // handleAddToCart();
        }}
        className="my-4 text-md"
      >
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
