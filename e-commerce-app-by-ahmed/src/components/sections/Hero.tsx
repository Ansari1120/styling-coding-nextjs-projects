import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import ProductList from "@/app/views/ProductList";

const Hero = () => {
  return (
    <>
      <div className="flex px-28 py-14 flex-col  lg:flex-row gap-y-2">
        <div className="basis-1/3">
          <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 text-lg font-bold">
            Sale 70%
          </Badge>
          <h1 className=" pt-8 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 text-2xl [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          <Button className="p-3 py-6 mt-8 text-lg">
            <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
          </Button>

          <div className="flex mt-8">
            <div className=" mr-4">
              <Image
                src={"/Featured1.webp"}
                alt="Featured1 Logo"
                width={110}
                height={110}
              />
            </div>
            <div className=" mr-4">
              <Image
                src={"/Featured2.webp"}
                alt="Featured2 Logo"
                width={110}
                height={110}
              />
            </div>
            <div className=" mr-4">
              <Image
                src={"/Featured3.webp"}
                alt="Featured3 Logo"
                width={110}
                height={110}
              />
            </div>
            <div className=" mr-4">
              <Image
                src={"/Featured4.webp"}
                alt="Featured4 Logo"
                width={110}
                height={110}
              />
            </div>
          </div>
        </div>
        <div className="lg:flex-1 lg:ml-56">
          <Image
            src={"/header.webp"}
            alt="Hero Logo"
            width={900}
            height={900}
          />
        </div>
      </div>
   <ProductList />
    </>
  );
};

export default Hero;
