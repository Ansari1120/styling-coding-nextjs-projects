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
    category -> {
      name
    },
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
      <div className="grid grid-cols-[repeat(4,auto)] justify-center gap-x-10  mt-4 py-10 flex-wrap">
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
              item={product}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
