import Image, { StaticImageData } from "next/image";
import { type } from "os";
import React from "react";

const ProductCard = (props: {
  sourcePic: StaticImageData;
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
      />
      <p className="font-bold mt-1 text-lg">{ProductName}</p>
      <p className="font-semibold text-base opacity-50 text-black">{type}</p>
      <p className="font-bold text-lg">${Price}</p>
    </div>
  );
};

export default ProductCard;
