import AddToCart from "@/components/sections/AddToCart";
import { client } from "@/lib/sanityClient";
import { product } from "@/lib/types";
import { StaticImageData } from "next/image";

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

const getProductsByid = async (id: string | number) => {
  const required = await getProductData();
  return required.filter((product: product) => product.id === id);
};

export default async function Page({ params }: { params: { id: string } }) {
  const result = await getProductsByid(params.id);
  console.log(result);
  return (
    <>
      <div className="flex justify-evenly mt-4 py-10 flex-wrap">
        {result.map((product: product) => (
          <div key={product.id} className="flex justify-between gap-6">
            <div className="basis-1/2">
              <img
                src={product.image as any}
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
