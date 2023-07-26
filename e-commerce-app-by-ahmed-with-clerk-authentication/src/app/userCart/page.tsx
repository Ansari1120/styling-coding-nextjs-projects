
import AllShoppingDetails from "@/components/sections/allShoppingDetails";
import UserCartDetails from "@/components/sections/userCartDetails";
import { cookies } from "next/headers";
import React from "react";

const page = () => {
  const userId = cookies().get("user_id")?.value;

  return (
    <>
      <div className="flex justify-evenly gap-x-10 mt-4 py-10 flex-wrap">
        {/* left Div */}
        <div className="">
          <h1 className="font-bold text-2xl font-sans basis-1/2 ">
            Shopping Cart
          </h1>
          <UserCartDetails uid={userId}/>
        </div>
        <div className="">
          <AllShoppingDetails />{" "}
        </div>
      </div>
    </>
  );
};

export default page;
