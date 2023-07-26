"use client";
import ProductCard from "@/components/sections/ProductCard";
import { client } from "@/lib/sanityClient";
import { product } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import MyLoader from "../views/loader";

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

const AllProducts = () => {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true); // Set isLoading to true before fetching data

      try {
        const result = await getProductData();
        const restoredData = result.filter(
          (data: any) => data && data.image !== null
        );
        console.log(restoredData);
        setData(restoredData);
        setloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-[repeat(4,auto)] md:grid-cols-[repeat(3,auto)] sm:grid-cols[repeat(1,auto)] justify-center gap-x-10  mt-4 py-10 flex-wrap">
        {loading ? (
          <MyLoader size="w-40 h-40" />
        ) : (
          data.map((product: product) => (
            <Link key={product.id} href={`/allProducts/${product.id}`}>
              <ProductCard
                width={200}
                height={200}
                sourcePic={product.image}
                ProductName={product.name}
                type={product.type}
                Price={product.price}
                item={product}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default AllProducts;
