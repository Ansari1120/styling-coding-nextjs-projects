import AddToCart from "@/components/sections/AddToCart";
import ProductCard from "@/components/sections/ProductCard";
import { Products } from "@/lib/mock";
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
const getProductsByCategory = async (category: string | any) => {
  const required = await getProductData();
  console.log(required);
  return required.filter(
    (product: product) => product.category && product.category.name === category
  );
};
export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getProductsByCategory(params.slug);
  console.log(result);
  return (
    <>
      <div className="grid grid-cols-[repeat(4,auto)] justify-center gap-x-10 mt-4 py-10 flex-wrap">
        {result.length > 0 ? (
          result.map((product: product) => (
            <Link href={`/allProducts/${product.id}`}>
              <ProductCard
                width={300}
                height={300}
                key={product.id}
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
