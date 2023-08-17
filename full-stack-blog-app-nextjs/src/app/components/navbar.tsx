import Link from "next/link";
import React from "react";
// import { usePathname } from "next/navigation";
import { fetchSession } from "./Profile";
import ProfileContext from "./profileContext";
import Image from "next/image";
import BlogLogo from "../../../public/blog.png";
const ProfileComponent = async () => {
  const session = await fetchSession();
  return <ProfileContext session={session} />;
};

const Navbar = () => {
  // const pathName = usePathname();
  // const session = await fetchSession();
  // console.log(pathName);
  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Public Blogs",
      route: "/public_blogs",
    },
  ];
  return (
    <div className="flex font-black py-19 gap-5 justify-between text-xl items-center lg:mx-[592px] mt-3">
      {/* <div className="flex font-black py-19 gap-5 justify-center text-xl items-center absolute lg:mx-[592px] mt-3">
        {navItems.map((data: any, ind: number) => {
          return (
            <Link
              key={ind}
              href={data.route}
              // className={
              //   pathName === `${data.route}`
              //     ? "text-black font-bold bg-gray-400 bg-opacity-50 p-2 rounded-md"
              //     : "text-white"
              // }
            >
              {data.name}
            </Link>
            // <div key={ind}>{data.name}</div>
          );
        })}
      </div> */}
      <div className="relative bottom-6 lg:right-[580px] m-3">
        <Image
          src={BlogLogo}
          alt="logo"
          width={50}
          height={50}
          className="h-15 w-15"
        />
      </div>
      <div className="lg:m-3 relative z-10 bottom-5 lg:left-[580px] -left-[28px]">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default Navbar;
