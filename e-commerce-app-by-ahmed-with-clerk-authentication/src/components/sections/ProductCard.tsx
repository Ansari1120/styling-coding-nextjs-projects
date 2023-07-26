"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import AddToCart from "./AddToCart";
import { ImageIcon } from "lucide-react";

const ProductCard = (props: {
  sourcePic: StaticImageData | any;
  ProductName: string;
  Price: number;
  type?: string;
  width: number;
  height: number;
  item: any;
}) => {
  const { sourcePic, ProductName, Price, width, height, type, item } = props;
  //max-h-[200px]
  return (
    <div className="mr-3">
      <Image
        className="hover:scale-125 object-cover object-top"
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
      <AddToCart item={item} />
    </div>
  );
};

export default ProductCard;
