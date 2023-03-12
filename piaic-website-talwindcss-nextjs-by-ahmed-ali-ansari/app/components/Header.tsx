import Image from "next/image";
import Link from "next/link";
import piaic from "../../public/piaic.svg";
import { BiAlignJustify } from "react-icons/bi";
import { ToggleMode } from "../ToggleMode";

export default function Header() {
  return (
    <div className="flex justify-between items-center md:px-7 px-[20px] py-2 w-full absolute">
      <div>
        <Image src={piaic} alt="PIAIC" width={50} height={50} />
      </div>
      <div>
        <ul className="md:flex space-x-[40px] text-lg font-semibold hidden">
          <li className=" text-white hover:text-blue-600 pt-[8px] hover:border-b-2 ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" text-white hover:text-blue-600 pt-[8px] hover:border-b-2">
            <Link href={"/"}>Syllabus</Link>
          </li>
          <li className="  text-white hover:text-blue-600 pt-[8px] hover:border-b-2">
            <Link href={"/"}>About</Link>
          </li>
          <li className="  text-white hover:text-blue-600 pt-[8px] hover:border-b-2">
            <Link href={"/"}>Contact</Link>
          </li>
          <li>
            <ToggleMode />
          </li>
          <div>
            <button className=" bg-blue-700 px-6 py-2 text-white rounded-xl text-xl font-semibold hover:bg-blue-900 hover:animate-bounce  ">
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
