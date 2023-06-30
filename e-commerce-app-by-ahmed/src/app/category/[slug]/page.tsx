import ProductCard from "@/components/sections/ProductCard";
import { Products } from "@/lib/mock";

const getProductsByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};
export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
  return (
    <>
      <div className="flex justify-evenly mt-4 py-10 flex-wrap">
        {result.length > 0 ? (
          result.map((product) => (
            <ProductCard
              width={300}
              height={300}
              key={product.id}
              sourcePic={product.image}
              ProductName={product.name}
              type={product.type}
              Price={product.price}
            />
          ))
        ) : (
          <h1>No Products found</h1>
        )}
      </div>
    </>
  );
}
