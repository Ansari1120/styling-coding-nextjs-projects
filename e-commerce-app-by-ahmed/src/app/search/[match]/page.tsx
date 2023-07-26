"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import MyLoader from "@/app/views/loader";
import ProductCard from "@/components/sections/ProductCard";
import { client } from "@/lib/sanityClient";
import { product } from "@/lib/types";
import Link from "next/link";

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

const Search = ({ params }: { params: { match: string } }) => {
  const inputString = params.match.toLowerCase();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState<product[]>([]);

  const filterProducts = data.filter((product: product) => {
    return (
      inputString.length && product.name.toLowerCase().includes(inputString)
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getProductData();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
    console.log(data);
  }, []);
  return (
    <div className="grid lg:grid-cols-[repeat(4,auto)] md:grid-cols-[repeat(3,auto)] sm:grid-cols[repeat(1,auto)] justify-center gap-x-10  mt-4 py-10 flex-wrap">
      {loading ? (
        <MyLoader size="w-40 h-40" />
      ) : (
        filterProducts.map((product: product) => (
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
  );
};

export default Search;
