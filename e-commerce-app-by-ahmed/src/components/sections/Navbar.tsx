"use client";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./../ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-20">
      <Link href={"/"}>
        {" "}
        <Image src={"/Logo.webp"} alt="website logo" width={150} height={150} />
      </Link>

      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-5">
              <NavigationMenuTrigger>
                <Link href={"/category/male"}>Male</Link>
              </NavigationMenuTrigger>
              <NavigationMenuTrigger>
                <Link href={"/category/female"}>Female</Link>
              </NavigationMenuTrigger>
              <NavigationMenuTrigger>
                <Link href={"/category/kids"}>Kids</Link>
              </NavigationMenuTrigger>
              <NavigationMenuTrigger>
                <Link href={"/allProducts"}>All Products</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex ">
        <Search className="bg-white rounded-l mr-2" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r"
        ></input>
      </div>
      <div className="p-2 rounded-full bg-gray-300">
        <ShoppingCart className="relative" />
        <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          0
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
