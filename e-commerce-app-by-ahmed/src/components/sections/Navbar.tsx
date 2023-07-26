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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useEffect, useState } from "react";
import { getMethod } from "@/app/api/calls";
import { cartActions } from "@/app/store/slice/cartSlice";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = ({ userId }: any) => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  console.log(useSelector((state: RootState) => state));
  const dispatch = useDispatch();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const updateStateItemsUsingPostGresSql = async () => {
    if (userId) {
      console.log("inside");
      const cartItems = await getMethod();
      const filterUserProducts = cartItems.filter(
        (data: any) => data.user_id === userId
      );
      dispatch(
        cartActions.addToCart({
          anItem: filterUserProducts,
          product: {},
          quantity: 0,
        })
      );
    }
  };
  const matchSearch = (e: any) => {
    if (e.key === "Enter" && e.keyCode === 13) {
      router.push(`/search/${search}`);
    }
  };
  useEffect(() => {
    updateStateItemsUsingPostGresSql();
  }, []);
  return (
    <nav className="flex justify-between items-center h-20 px-20 sticky top-0 backdrop-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor z-20">
      <Link href={"/"}>
        <Image
          className="object-contain"
          src={"/Logo.webp"}
          alt="website logo"
          width={150}
          height={150}
        />
      </Link>
      <div className="hidden lg:block ">
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
      <div className="flex  ">
        <Search className="bg-white rounded-l mr-2 hidden md:block " />{" "}
        <input
          value={search}
          onKeyDown={matchSearch}
          onChange={(e: any) => setSearch(e.target.value)}
          type="text"
          placeholder="What you are looking for"
          className="rounded-r hidden md:block"
        ></input>
      </div>
      <div className="p-2 rounded-full bg-gray-300 hidden md:block">
        <Link href={"/userCart"}>
          {" "}
          <ShoppingCart className="relative" />
        </Link>

        <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          {cartValue}
        </span>
      </div>
      <div className="md:hidden ml-14">
        <Sheet>
          <SheetTrigger>
            {" "}
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="mb-5">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem className="grid grid-cols-1 gap-x-5 ">
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
              <div className="flex">
                <Search className="bg-white rounded-l mr-2 " />{" "}
                <input
                  type="text"
                  placeholder="What you are looking for"
                  className="rounded-r mb-4"
                ></input>
              </div>
              <div className="pt-2 pb-2 pl-2 pr-1 rounded-full bg-gray-300 mr-72">
                <Link href={`/userCart`}>
                  {" "}
                  <ShoppingCart className="relative " />
                </Link>
                <span className="absolute top-60 top left-30 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
                  {cartValue}
                </span>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
