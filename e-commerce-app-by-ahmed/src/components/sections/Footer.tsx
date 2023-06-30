"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Minus } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Copyright } from "lucide-react";
import Logo from "../../../public/Logo.webp";

export default function Footer() {
  return (
    <div className="w-full ">
      <div className="w-full text-gray-500 md:flex flex-row grid grid-cols-1 mb-6">
        <div className="basis-1/4 mx-10 p-10">
          <Image
            className="my-8"
            src={Logo}
            alt={"EcommerceLogo"}
            width={200}
            height={200}
          />
          <h1 className="text-lg font-semibold ">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </h1>

          <div className="flex flex-row pt-6 space-x-2">
            <Link href={"#"} className="bg-slate-300 rounded-md p-1">
              <Twitter />
            </Link>
            <Link href={"#"} className="bg-slate-300 rounded-md p-1">
              <Facebook />
            </Link>
            <Link href={"#"} className="bg-slate-300 rounded-md p-1">
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="basis-1/4 ml-11 lg:my-8 p-10 text-lg">
          <h1 className="text-3xl font-semibold pb-10 text-black">Company</h1>
          <ul>
            <li className="pb-2">
              <Link href={"/"}>About</Link>
            </li>

            <li className="pb-2">
              <Link href={"/"}>Terms of Use</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/4 ml-11 lg:my-8 p-10 text-lg">
          <h1 className="text-3xl font-semibold pb-10 text-black">Support</h1>
          <ul>
            <li className="pb-2">
              <Link href={"/"}>Supoort Carrier</Link>
            </li>

            <li className="pb-2">
              <Link href={"/"}>24 Hourse of Service</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>Quick Chat</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/4 ml-11 lg:my-8 p-10 text-lg">
          <h1 className="text-3xl font-semibold pb-10 text-black">Contact</h1>
          <ul>
            <li className="pb-2">
              <Link href={"/"}>WhatsApp</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>Support 24 Hours</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row justify-items-center border-t-2 p-4 border-black justify-evenly text-lg text-gray-500  pl-[4px] pb-[40px] gap-4 lg:pl-[26px] ">
        <div className="basis-1/4">
          <h1 className="flex flex-wrap">
            Copyright{" "}
            <span className="mx-1 inline-block align-top ">
              <Copyright />
            </span>
            2023 Dine Market(AHMED)
          </h1>
        </div>
        <div className="basis-1/4">
          <h1>
            Designed by{" "}
            <span className="text-black font-bold">
              Ahmed Ali Ansari (PIAIC171908)
            </span>
          </h1>
        </div>
        <div className="basis-1/4">
          <h1 className="">
            Code by{" "}
            <span className="text-black font-bold">
              Ahmed Ali Ansari (PIAIC171908)
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
