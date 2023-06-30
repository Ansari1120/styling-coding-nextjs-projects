import React from "react";
import ProductCard from "@/components/sections/ProductCard";
import { Products } from "@/lib/mock";
import Link from "next/link";

const ProductList = () => {
  const randomIndices: number[] = [];
  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * Products.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }
  const selectedProducts = randomIndices.map((index) => Products[index]);
  return (
    <div className="mx-32">
      <p className=" text-blue-600 mt-10 text-center font-bold text-base">
        Products
      </p>
      <h2 className=" font-bold text-3xl text-center mt-7 mb-10">
        Check What we Have
      </h2>
      <div className="flex justify-center place-items-center">
        {selectedProducts.map((product) => (
          <Link href={`/allProducts/${product.id}`}>
            <ProductCard
              width={500}
              height={500}
              key={product.id}
              sourcePic={product.image}
              ProductName={product.name}
              Price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
