import ProductCard from "@/components/sections/ProductCard";
import { client } from "@/lib/sanityClient";
import { product } from "@/lib/types";
import Link from "next/link";
import React from "react";

const getProductData = async () => {
  const res = await client.fetch(`*[_type == 'product']{
    name,
    'image': image.asset->url,
    price,
    category,
    id,
    type,
  }`);
  return res;
};

const AllProducts = async () => {
  const result = await getProductData();
  console.log(result);
  return (
    <>
      <div className="flex justify-evenly mt-4  py-10 flex-wrap">
        {result.map((product: product) => (
          <Link href={`/allProducts/${product.id}`}>
            <ProductCard
              width={200}
              height={200}
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
