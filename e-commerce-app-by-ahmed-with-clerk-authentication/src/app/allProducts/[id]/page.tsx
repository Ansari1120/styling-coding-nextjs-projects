"use client";
import MyLoader from "@/app/views/loader";
import AddToCart from "@/components/sections/AddToCart";
import Quantity from "@/components/sections/Quantity";
import Sizes from "@/components/sections/Sizes";
import { client } from "@/lib/sanityClient";
import { product } from "@/lib/types";
import { useEffect, useState } from "react";

const getProductData = async () => {
  const res = await client.fetch(`*[_type == 'product']{
    name,
    'image': image.asset->url,
    price,
    category -> {
      name
    },
    id,
    type,
  }`);
  return res;
};

const getProductsByid = async (id: string | number) => {
  const required = await getProductData();
  return required.filter((product: product) => product.id === id);
};

export default function Page({ params }: { params: { id: string } }) {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProductsByid(params.id);
        setLoader(false);
        setData(result);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  useEffect(() => {
    let reloadCount = Number(localStorage.getItem("reloadCount")) || 0;
    localStorage.setItem("reloadCount", String((reloadCount = 1)));
  }, []);
  return (
    <>
      <div className="my-10">
        {loader ? (
          <MyLoader size="w-40 h-20" />
        ) : (
          data.map((product: product) => (
            <div key={product.id} className="flex flex-col lg:flex-row justify-center">
              <div className="basis-1/2">
                <img
                  className="hover:scale-125 object-cover object-top"
                  src={product.image as any}
                  alt={product.name}
                  width={600}
                  height={600}
                />
              </div>
              <div>
                <h1 className="mt-7 text-black font-bold text-3xl lg:text-5xl font-sans">
                  {product.name}
                </h1>
                <p className="text-black opacity-50 font-semibold text-md lg:text-xl capitalize">
                  {product.type}
                </p>
                <div>
                  <h1 className="mt-6 text-md font-semibold ">SELECT SIZE</h1>
                  <Sizes />
                </div>
                <div className="flex items-center mt-6 gap-x-3">
                  <h3 className="text-[20px] font-semibold">Quantity:</h3>
                  <Quantity productId={product.id} />
                </div>

                <div className="flex flex-wrap">
                  <div className="mr-7">
                    <AddToCart item={product} />
                  </div>
                  <div className=" font-bold text-black text-3xl mt-5">
                    $ {product.price}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
