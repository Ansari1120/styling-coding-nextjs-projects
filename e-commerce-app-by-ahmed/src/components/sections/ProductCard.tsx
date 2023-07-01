"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = (props: {
  sourcePic: StaticImageData | any;
  ProductName: string;
  Price: number;
  type?: string;
  width: number;
  height: number;
}) => {
  const { sourcePic, ProductName, Price, width, height, type } = props;

  return (
    <div className="mr-3">
      <Image
        className="hover:scale-125"
        src={sourcePic}
        width={width}
        height={height}
        alt={ProductName}
        loader={({ src, width, quality }) =>
          `${src}?w=${width}&q=${quality || 75}`
        }
      />
      <p className="font-bold mt-1 text-lg">{ProductName}</p>
      <p className="font-semibold text-base opacity-50 text-black">{type}</p>
      <p className="font-bold text-lg">${Price}</p>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
