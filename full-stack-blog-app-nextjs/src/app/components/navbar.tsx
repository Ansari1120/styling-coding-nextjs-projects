import Link from "next/link";
import React from "react";
// import { usePathname } from "next/navigation";
import { fetchSession } from "./Profile";
import ProfileContext from "./profileContext";

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
      name: "About",
      route: "/about  ",
    },
    {
      name: "Blogs",
      route: "/blogs",
    },
  ];
  return (
    <div>
      <div className="flex font-black py-19 gap-5 justify-center text-xl items-center absolute lg:mx-[592px] mt-3">
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
      </div>
      <div className="float-right m-3">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default Navbar;
