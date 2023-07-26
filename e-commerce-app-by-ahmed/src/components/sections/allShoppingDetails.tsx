"use client";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import getStipePromise from "@/lib/stripe";
import { client } from "@/lib/sanityClient";
import { useEffect, useState } from "react";

const getProductDataFromSanity = async () => {
  const res = await client.fetch(`*[_type == 'product']{
    id,
    price,
    }`);
  return res;
};

const getProductsByid = async (arr: Array<any>) => {
  const required = await getProductDataFromSanity();
  //   return required.filter((productimgs: any) => {
  //     return arr.find((data: any) => {
  //       return data.product_id == productimgs.id;
  //     });
  //   });
  const mergedArray = Object.values(arr).map((item: any) => {
    if (item.hasOwnProperty("product_id")) {
      const matchingImage = required.find(
        (obj: any) => obj.id === item.product_id
      );
      if (matchingImage) {
        return { ...item, basePrice: matchingImage.price };
      }
    }
    return item;
  });
  return mergedArray;
};

const AllShoppingDetails = () => {
  const itemsAdd = useSelector((state: RootState) => state.cart.anItem);
  const [required, setRequired] = useState<Array<any>>([]);

  const totalQuantity = itemsAdd.reduce(
    (accumulator: any, object: { quantity: any }) => {
      return accumulator + object.quantity;
    },
    0
  );

  const subTotal = itemsAdd.reduce(
    (accumulator: any, object: { price: any }) => {
      return accumulator + object.price;
    },
    0
  );

  const handlePaymentCheckout = async () => {
    console.log("handlePaymentCheckout called");
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(required),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsByid(itemsAdd);
      setRequired(data);
    };

    fetchData();
  }, [itemsAdd]);
  console.log("AllShoppingDetails", required);
  return (
    <>
      <div className="mt-10 bg-slate-100 pb-[18px]  pt-8   px-10 rounded">
        <h1 className="text-black font-bold text-2xl pb-6">Order Summary</h1>
        <div className="flex justify-between mb-6 text-lg">
          <div className="">Quantity</div>
          <div>{totalQuantity}</div>
        </div>
        <div className="flex justify-between text-semibold  mb-6 text-lg">
          <div className="">SubTotal</div>
          <div>{subTotal}</div>
        </div>
        <Button onClick={handlePaymentCheckout}>Proceed to Checkout</Button>
      </div>
    </>
  );
};

export default AllShoppingDetails;

