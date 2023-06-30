import AddToCart from "@/components/sections/AddToCart";
import ProductCard from "@/components/sections/ProductCard";
import { Products } from "@/lib/mock";
import Link from "next/link";
import React from "react";

const AllProducts = () => {
  return (
    <>
      <div className="flex justify-evenly mt-4  py-10 flex-wrap">
        {Products.map((product) => (
          <Link href={`/allProducts/${product.id}`}>
            <ProductCard
              width={300}
              height={300}
              key={product.id}
              sourcePic={product.image}
              ProductName={product.name}
              type={product.type}
              Price={product.price}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
