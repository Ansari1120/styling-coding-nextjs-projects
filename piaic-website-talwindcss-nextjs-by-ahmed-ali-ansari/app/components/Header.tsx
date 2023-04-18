"use client";
import Image from "next/image";
import Link from "next/link";
import piaic from "../../public/piaic.svg";
import { BiAlignJustify } from "react-icons/bi";
import { ToggleMode } from "../ToggleMode";
import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

export default function Header() {
  const [dropDownState, setdropDownState] = useState(false);
  const [hamburgerMenu, setHamburgerMenuOpen] = useState(false);
  const HandledropDownState = () => setdropDownState(!dropDownState);
  useEffect(() => {
    const handleListener = (e: any) => {
      if (!e.target.matches(".drop")) setdropDownState(false);
    };
    window.addEventListener("click", handleListener);

    return () => window.removeEventListener("click", handleListener);
  }, []);
  return (
    <div className="sticky top-0">
      <div className="flex justify-between items-center md:px-7 px-[20px] py-2 w-full absolute">
        <div className="md:relative fixed  md:top-0 top-3">
          <Image src={piaic} alt="PIAIC" width={50} height={50} />
        </div>
        <div>
          <ul className="md:flex space-x-[40px] text-lg font-semibold hidden">
            <li className=" text-white hover:text-blue-600 pt-[8px] hover:border-b-2 ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className=" text-white hover:text-blue-600 pt-[8px] hover:border-b-2 relative">
              {/* <Link href={"/syllabus"}>Syllabus</Link> */}
              <button
                className="drop flex items-center px-2 hover:text-accent "
                type="button"
                onClick={HandledropDownState}
              >
                Courses
                <svg
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {dropDownState ? (
                <ul className="drop absolute left-2 top-16 z-10  w-96 cursor-pointer divide-y divide-gray-50  rounded-lg bg-white bg-opacity-40 px-2 py-2 text-sm text-black shadow backdrop-blur-md dark:divide-slate-600 dark:bg-gray-700 dark:bg-opacity-40  dark:text-gray-200 ">
                  <li>
                    <Link href={"/syllabus/AI"}>
                      <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                        Artificial Intelligence
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/syllabus/BCC"}>
                      <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                        Web 03 (Blockchain) & Metaverse
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/syllabus/CNC"}>
                      <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                        Cloud Computing
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/syllabus/IOT"}>
                      <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                        Internet of Things
                      </span>
                    </Link>
                  </li>
                 
                </ul>
              ) : null}
            </li>
            <li className="  text-white hover:text-blue-600 pt-[8px] hover:border-b-2">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="  text-white hover:text-blue-600 pt-[8px] hover:border-b-2">
              <Link href={"/contact"}>Contact</Link>
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
        <div className="md:hidden text-xl ml-56">
          <li>
            <button
              className=" block rounded-lg border-2  p-2  text-3xl shadow-md shadow-accent border-gray-300 text-slate-100  md:hidden"
              onClick={() => setHamburgerMenuOpen(!hamburgerMenu)}
            >
              {hamburgerMenu ? <RiCloseFill /> : <BiAlignJustify />}
            </button>
            {hamburgerMenu ? (
              <ul className="  rounded-md shadow-xl bg-slate-100 text-black font-semibold p-4   md:-ml-0 -ml-14  mt-3">
                <li>
                  <Link href={"/"}>
                    <span className="block rounded-md py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    className="drop flex items-center py-1 hover:text-accent "
                    type="button"
                    onClick={HandledropDownState}
                  >
                    Courses
                    <svg
                      className="ml-2 h-4 w-4"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {dropDownState ? (
                    <ul className="drop  absolute  top-16 z-10  w-56 cursor-pointer divide-y divide-gray-50  rounded-lg bg-white bg-opacity-40 px-2 py-2 text-sm text-black shadow backdrop-blur-md dark:divide-slate-600 dark:bg-gray-700 dark:bg-opacity-40  dark:text-gray-200  md:-ml-0 -ml-32">
                      <li>
                        <Link href={"/syllabus/AI"}>
                          <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                            Artificial Intelligence
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/syllabus/BCC"}>
                          <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                          Web 03 (Blockchain) & Metaverse
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/syllabus/CNC"}>
                          <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                            Cloud Computing
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href={"/syllabus/IOT"}>
                          <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                            Internet of Things
                          </span>
                        </Link>
                      </li>
                    
                    </ul>
                  ) : null}
                </li>
                <li>
                  <Link href={"/about"}>
                    <span className="block rounded-md py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"}>
                    <span className="block rounded-md py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                      Contact
                    </span>
                  </Link>
                </li>
                <li>
                  <span className="block rounded-md py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                    <ToggleMode />
                  </span>
                </li>
              </ul>
            ) : null}
          </li>
        </div>
      </div>
    </div>
  );
}

//Create courses files in thier very folders
//import QuartersCards in each course
//Add courses link to dropdown navigation
//in Link add /syllabus/AI
//TASK 02 :
//make quarter cards common/spacialized refer
//  https://www.youtube.com/watch?v=PSG-bJ9bBsU&list=PLJdNMwIsylFEYL6ygX6tmWjCfwii5vk89&index=2
