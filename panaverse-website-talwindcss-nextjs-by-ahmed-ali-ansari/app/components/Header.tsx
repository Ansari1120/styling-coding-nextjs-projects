import Image from "next/image";
import Link from "next/link";
import React from "react";
import panaverse from "../../public/Logo.png";
import { BiAlignJustify } from "react-icons/bi";
// import ToggleTheme from "../ToggleTheme";
export default function Header() {
  return (
    <div className="flex justify-between items-center md:px-7 px-[20px] py-2 w-full ">
      <div>
        <Image src={panaverse} alt="panaverse" />
      </div>
      <div>
        <ul className="md:flex space-x-[40px] text-lg font-semibold hidden ">
          <li className="hover:text-blue-600 pt-[8px]">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-600 pt-[8px]">
            <Link href={"/"}>Syllabus</Link>
          </li>
          <li className="hover:text-blue-600 pt-[8px]">
            <Link href={"/"}>About</Link>
          </li>
          <li className="hover:text-blue-600 pt-[8px]">
            <Link href={"/"}>Contact</Link>
          </li>
          {/* <li>
            <ToggleTheme />
          </li> */}
          <div>
            <button className="bg-blue-700 px-6 py-2 text-white rounded-xl text-xl font-semibold hover:bg-blue-900 hover:animate-bounce  ">
              Apply
            </button>
          </div>
        </ul>
      </div>
      <div className="static md:hidden text-2xl ">
        <BiAlignJustify />
      </div>
    </div>
  );
}
