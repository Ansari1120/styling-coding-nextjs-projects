import React from "react";
import ProductCard from "@/components/sections/ProductCard";
import Link from "next/link";
import { client } from "@/lib/sanityClient";

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

const ProductList = async () => {
  const required = await getProductData();
  const randomIndices: number[] = [];
  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * required.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }
  const selectedProducts = randomIndices.map((index) => required[index]);
  return (
    <div className="lg:mx-32 mx-2">
      <p className=" text-blue-600 mt-10 text-center font-bold lg:text-2xl text-xl">
        Products
      </p>
      <h2 className=" font-bold text-3xl text-center mt-7 mb-10">
        Check What we Have
      </h2>
      <div className="grid lg:grid-cols-[repeat(3,auto)] grid-cols-[repeat(1,auto)]  justify-center gap-x-10 place-items-center">
        {selectedProducts.map((product) => (
          <Link key={product.id} href={`/allProducts/${product.id}`}>
            <ProductCard
              width={500}
              height={500}
              sourcePic={product.image}
              ProductName={product.name}
              Price={product.price}
              item={product}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
