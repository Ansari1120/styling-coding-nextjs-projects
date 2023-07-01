import AddToCart from "@/components/sections/AddToCart";
import { Products } from "@/lib/mock";
import Image from "next/image";

const getProductsByid = (id: string | number) => {
  return Products.filter((product) => product.id === id);
};
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsByid(params.id);
  console.log(result);
  return (
    <>
      <div className="flex justify-evenly mt-4 py-10 flex-wrap">
        {result.map((product) => (
          <div key={product.id} className="flex justify-between gap-6">
            <div className="basis-1/2">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
              />
            </div>
            <div>
              <h1 className="mt-7 text-black font-bold text-5xl font-sans">
                {product.name}
              </h1>
              <p className="text-black opacity-50 font-semibold text-xl capitalize">
                {product.type}
              </p>
              <div className="flex flex-wrap">
                <div className="mr-7">
                  <AddToCart />
                </div>
                <div className=" font-bold text-black text-3xl mt-5">
                  $ {product.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
