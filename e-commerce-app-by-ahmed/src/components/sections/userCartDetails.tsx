"use client";
import { cartActions } from "@/app/store/slice/cartSlice";
import { RootState } from "@/app/store/store";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Quantity from "./Quantity";
import { client } from "@/lib/sanityClient";
import { useRouter } from "next/navigation";

const getProductDataFromSanity = async () => {
  const res = await client.fetch(`*[_type == 'product']{
    'image': image.asset->url,
    id,
  }`);
  return res;
};

const getProductsById = async (arr: Array<any>) => {
  const required = await getProductDataFromSanity();
  const mergedArray = Object.values(arr).map((item: any) => {
    if (item.hasOwnProperty("product_id")) {
      const matchingImage = required.find(
        (obj: any) => obj.id === item.product_id
      );
      if (matchingImage) {
        return { ...item, image: matchingImage.image };
      }
    }
    return item;
  });
  return mergedArray;
};

const UserCartDetails = ({ uid, router }: any) => {
  const dispatch = useDispatch();
  const itemsAdd = useSelector((state: RootState) => state.cart.anItem);
  const itemsInitial = useSelector((state: RootState) => state.cart.items);
  const [cartArr, setCartArr] = useState<any>([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const isMountedRef = useRef(true);
  const [count, setCount] = useState(0);

  const handleDelete = (data: any) => {
    dispatch(
      cartActions.addToCart({
        methd: "delete",
        product: data,
        quantity: 0,
      })
    );
    let reloadCount = Number(localStorage.getItem("reloadCount")) || 0;
    if (reloadCount > 1) {
      localStorage.setItem("reloadCount", String((reloadCount = 1)));
      setCount(reloadCount);
    }
    //  setCount(reloadCount);
    setRefreshFlag(true);
  };

  const AllProducts = async () => {
    try {
      const required = await getProductsById(itemsAdd);
      const mergedArray = required.map((item: any) => {
        if (item.hasOwnProperty("product_id")) {
          const matchingImage = required.find(
            (obj: any) => obj.id === item.product_id
          );
          if (matchingImage) {
            return { ...item, image: matchingImage.image };
          }
        }
        return item;
      });
      setCartArr([...mergedArray]);
    } catch (error) {
      console.error("Error getting cart items:", error);
    }
  };

  useEffect(() => {
    let reloadCount = Number(localStorage.getItem("reloadCount")) || 0;
    setCount(reloadCount);
    // if (reloadCount > 1) {
    localStorage.setItem("reloadCount", String(reloadCount + 1));
    // }
    setRefreshFlag(true);
  }, []);

  useEffect(() => {
    console.log(count, refreshFlag);
    if (refreshFlag && count == 1) {
      setTimeout(() => {
        setRefreshFlag(false);
        window.location.reload();
      }, 100);
    }
  }, [refreshFlag, count]);

  useEffect(() => {
    AllProducts();
  }, [itemsAdd]);

  useEffect(() => {
    // const savedCartArr = JSON.parse(localStorage.getItem("cartArr") || "[]");
    // if (savedCartArr.length === 0) {
    //   setCartArr([...itemsInitial]);
    //   localStorage.setItem("cartArr", JSON.stringify(itemsInitial));
    // } else {
    //   setCartArr(savedCartArr);
    // }

    setCartArr([...itemsInitial]);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("cartArr", JSON.stringify(cartArr));
  // }, [cartArr]);

  return (
    <>
      <div>
        {cartArr
          ? cartArr.map((data: any) => {
              return (
                <div
                  key={!itemsAdd ? data.id : data.product_id}
                  className="flex flex-col lg:flex-row"
                >
                  <div className="my-6 mx-5 ">
                    <Image
                      className="rounded h-52 w-40"
                      key={!itemsAdd ? data.id : data.product_id}
                      src={data.image}
                      alt={!itemsAdd ? data.name : data.productname}
                      width={150}
                      height={150}
                      loader={({ src, width, quality }) =>
                        `${src}?w=${width}&q=${quality || 75}`
                      }
                    />
                  </div>
                  <div className="flex lg:gap-x-56 mt-4 flex-row">
                    <div className="text-lg">
                      <h1 className="mb-5 font-sans font-semibold">
                        {!itemsAdd ? data.name : data.productname}
                      </h1>
                      <p className="mb-5 text-gray-500">{data.type}</p>
                      <h2 className="mb-5 font-bold text-black">
                        Working Estimation
                      </h2>
                      <h2 className="mb-5 font-bold text-yellow-400">
                        5 Working Days
                      </h2>
                      <h2 className="font-bold">$ {data.price}</h2>
                    </div>
                    <div className="">
                      <Trash2
                        onClick={() => handleDelete(data)}
                        className=" mb-44 lg:mb-36 ml-[70px] h-8 w-8 hover:shadow-2xl hover:scale-110"
                      />
                      <Quantity
                        productId={!itemsAdd ? data.id : data.product_id}
                        quantity={data.quantity}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          : "Your shopping bag is empty"}
      </div>
    </>
  );
};

export default UserCartDetails;
