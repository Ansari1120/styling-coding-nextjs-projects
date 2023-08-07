"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Loader from "../../../public/loader.gif";
import Image from "next/image";
export default function SignOutButton() {
  const [loading, setLoading] = useState(false);
  const SignOut = () => {
    setLoading(true);
    signOut({ callbackUrl: "/login", redirect: true })
      .then(() => {
        console.log("user sucessfully signed out with facebook");
        setLoading(false);
      })
      .catch((e) => {
        console.log("something went wrong", e);
        setLoading(false);
      });
  };
  return (
    <div>
      <button
        onClick={() => SignOut()}
        className="grid bg-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-sm hover:font-semibold"
      >
        {loading ? (
          <div className="flex items-center">
            <div className="mr-2">processing</div>
            <div>
              <Image src={Loader} width={20} height={20} alt="loader" />
            </div>
          </div>
        ) : (
          "Sign Out"
        )}
      </button>
    </div>
  );
}
