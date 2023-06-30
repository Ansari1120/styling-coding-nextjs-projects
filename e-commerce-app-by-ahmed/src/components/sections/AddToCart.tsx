import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const AddToCart = () => {
  return (
    <>
      <Button className=" my-4 text-md">
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
