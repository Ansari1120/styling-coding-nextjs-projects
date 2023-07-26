"use client";
import MyLoader from "@/app/views/loader";
import ProductCard from "@/components/sections/ProductCard";
import { client } from "@/lib/sanityClient";
import { product } from "@/lib/types";
import Link from "next/link";
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
const getProductsByCategory = async (category: string | any) => {
  const required = await getProductData();
  console.log(required);
  return required.filter(
    (product: product) =>
      product.category &&
      product.category.name === category &&
      product.image !== null
  );
};
export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProductsByCategory(params.slug);
        setLoader(false);
        setData(result);
      } catch (e) {
        console.log(e);
        setLoader(false);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="grid lg:grid-cols-[repeat(4,auto)] md:grid-cols-[repeat(3,auto)] sm:grid-cols[repeat(1,auto)] justify-center gap-x-10 mt-4 py-10 flex-wrap">
        {loader ? (
          <MyLoader size="w-40 h-20" />
        ) : data.length > 0 ? (
          data.map((product: product) => (
            <Link key={product.id} href={`/allProducts/${product.id}`}>
              <ProductCard
                width={300}
                height={300}
                sourcePic={product.image}
                ProductName={product.name}
                type={product.type}
                Price={product.price}
                item={product}
              />
            </Link>
          ))
        ) : (
          <h1>No Products found</h1>
        )}
      </div>
    </>
  );
}
function fetchData() {
  throw new Error("Function not implemented.");
}
