import ProductCard from "@/components/sections/ProductCard";
import { Products } from "@/lib/mock";

const getProductsByid = (id: string) => {
  return Products.filter((product) => product.id === id);
};
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsByid(params.id);
  console.log(result);
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
