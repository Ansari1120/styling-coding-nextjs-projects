import Image from "next/image";
import Link from "next/link";
import React from "react";
import panaverse from "../../public/Logo.png";
import { HiMail } from "react-icons/hi";
import Twitter from "../../public/assets/twitter.png";
import Youtube from "../../public/assets/Youtube.png";
import github from "../../public/assets/github.png";
import discord from "../../public/assets/discord.png";
import insta from "../../public/assets/insta.png";
import copyright from "../../public/assets/copyright.png";
import contact from "../../public/assets/contact.png";
import panacloud from "../../public/assets/panacloud.png";
import rectangle from "../../public/assets/Rectangle-8.png";
import piaic from "../../public/piaic.svg";

export default function Footer() {
  return (
    <div className="w-full bg-black ">
      <div className="w-full  bg-black text-white md:flex flex-row grid grid-cols-1   mb-6">
        <div className="basis-1/4 mx-7 my-4">
          <Image src={piaic} alt={"PIAIC"} width={80} height={80} />
          <h1>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </h1>

          <div className="flex flex-row pt-6 space-x-2  ">
            <Link href={"/"} className="bg-slate-300 rounded-md p-1">
              <Image src={Youtube} alt="youtube" />
            </Link>
            <Link href={"/"} className="bg-slate-300 rounded-md p-1">
              {" "}
              <Image src={insta} alt="Instagram" />
            </Link>
            <Link href={"/"} className="bg-slate-300 rounded-md p-1">
              {" "}
              <Image src={discord} alt="discord" />
            </Link>
            <Link href={"/"} className="bg-slate-300 rounded-md p-1">
              {" "}
              <Image src={Twitter} alt="twitter" />
            </Link>
            <Link href={"/"} className="bg-slate-300 rounded-md p-1">
              {" "}
              <Image src={github} alt="github" />
            </Link>
          </div>
        </div>
        <div className="basis-1/4 ml-11 my-4">
          <h1 className="text-3xl font-semibold pb-10">Links</h1>
          <ul>
            <li className="pb-2">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>Syllabus</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>About</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/4 ml-11 my-4">
          <h1 className="text-3xl font-semibold pb-10">Support</h1>
          <ul>
            <li className="pb-2">
              <Link href={"/"}>Help Center</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>Terms of Service</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li className="pb-2">
              <Link href={"/"}>legal</Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/4 ml-11  my-4">
          <h1 className="text-3xl font-semibold pb-10">Stay upto date</h1>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Enter Email"
              // value={""}
              className="rounded-md pl-3"
            />
            <button className="focus:ring-2 focus:ring-blue-500 focus:outline-none bg-blue-700 hover:bg-blue-400  ml-2 p-1 rounded-sm">
              {" "}
              <HiMail />{" "}
            </button>
          </div>
          <label htmlFor="" className="text-sm italic mr-[100px]">
            Get the latest news and updates right at your inbox.
          </label>
        </div>
      </div>
      <div className="grid text-white grid-column md:grid-cols-1 bg-gray-500 mx-[50px] md:mx-[100px] rounded-t-lg p-4 mt-[-6px] space-x-2 justify-items-center -mb-14">
        <div className="md:flex flex-row grid grid-cols-1">
          <div className="basis-1/3 py-5 mr-4">
            <Image src={copyright} alt="copyright" />
            <h1 className="text-sm pt-1 italic text-black font-semibold">
              AHMED ALI ANSARI PIAIC 171908
            </h1>
          </div>
          <div className=" mr-7 3xl:hidden static ">
            {" "}
            <Image src={rectangle} alt="line" />
          </div>
          <div className="my-5 mr-3">
            <Image src={contact} alt="contact" />
          </div>
          <div className="my-4">
            <h1 className="text-sm pt-1 italic text-black font-semibold">
              Have a Question ? call us at 24/6
            </h1>
            <h1 className="text-sm pt-1 italic text-black font-semibold">
              +923************
            </h1>
          </div>
          <div className="mx-7 3xl:hidden static">
            {" "}
            <Image src={rectangle} alt="line" />
          </div>
          <div className="basis-1/4">
            <h1 className="text-sm pt-1 italic text-black font-semibold">
              Powered By:
            </h1>
            <Image src={panacloud} alt="panacloud" />
          </div>
        </div>
      </div>
    </div>
  );
}
