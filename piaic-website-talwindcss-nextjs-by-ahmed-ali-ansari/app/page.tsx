import Image from "next/image";
import Logo from "../public/Logo.png";
import Saylani from "../public/partners/saylanilogo.png";
import Panacloud from "../public/partners/panacloudlogo.png";
import CourseLayout from "./components/CourseLayout";
import AI from "../public/ai1.png";
import AITwo from "../public/ai2.png";
import BCC from "../public/bc.png";
import BCC1 from "../public/bc1.png";
import CNC1 from "../public/iot1.png";
import CNC2 from "../public/iot2.png";
import IOT1 from "../public/iot1.png";
import IOT2 from "../public/iot2.png";
import WMD from "../public/wmd.png";
import WMD2 from "../public/md.png";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div className="  rounded-b-[30%] text-center bg-[url('https://images6.alphacoders.com/456/456498.jpg')] bg-fixed bg-cover bg-no-repeat  md:px-40  px-15 py-40  ">
        <h1 className="text-white font-bold md:text-6xl text-4xl ">
          Presidential Initiative
        </h1>
        <label className="font-extrabold md:text-2xl text-xl   mt-1 text-white  md:border-b-8  border-spacing-y-5 md:p-2  border-dashed">
          for Artificial Intelligence & Computing (PIAIC)
        </label>
        <p className=" md:rounded-b-[30%] rounded-b-[15%] md:text-lg text-base mt-8 font-semibold  md:mx-20 mx-10 text-black  bg-teal-100  opacity-60  p-4">
          The mission of PIAIC is to reshape Pakistan by revolutionizing
          education, research, and business by adopting latest, cutting-edge
          technologies. Experts are calling this the 4th industrial revolution.
          We want Pakistan to become a global hub for AI, data science, cloud
          native computing, edge computing, blockchain, augmented reality, and
          internet of things.
        </p>
        {/* <button className="ease-in duration-300 bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold mt-3 hover:bg-blue-300 ">
          Learn More
        </button> */}
        <Button text={"Learn More"} />
      </div>
      <div className="md:flex grid shadow-2xl w-[60%] align-middle justify-items-center justify-around py-[60px] m-auto -mt-[80px] bg-white md:rounded-full  rounded-3xl">
        <Image src={Logo} alt="Logo" width={120} height={120} />
        <Image src={Saylani} alt="Saylani" width={160} height={160} />
        <Image src={Panacloud} alt="Panacloud" width={90} height={90} />
      </div>
      <div>
        <h1 className="text-2xl text-center mt-14 font-bold">Our Programs</h1>
      </div>
      <div className="bg-[url('https://img.freepik.com/premium-vector/abstract-halftone-wallpaper_23-2148600733.jpg?w=740')] bg-fixed bg-cover bg-no-repeat  py-32">
        <CourseLayout
          imgOne={AI}
          imgTwo={AITwo}
          Heading="Artificial  Intelligence"
          BackIndex="1"
          Para="A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
            GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI."
          ExploreButtonID="AI"
        />
      </div>
      <div className="bg-[url('https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg?w=740&t=st=1679506207~exp=1679506807~hmac=0bf4f163efbb6f32acdd791f576bfba8c35f700d55894de55a672ef05058f644')] bg-fixed bg-cover bg-no-repeat  py-32">
        <CourseLayout
          imgOne={BCC}
          imgTwo={BCC1}
          Heading="Blockchain"
          BackIndex="2"
          Para="A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS"
          ExploreButtonID="BCC"
        />
      </div>
      <div className="bg-[url('https://img.freepik.com/free-photo/vintage-grunge-blue-concrete-texture-wall-background-with-vignette_1258-28373.jpg?w=740&t=st=1679516764~exp=1679517364~hmac=9134a8a2eb858bb1783faf80a829520be7e3c3e4d929fb4e042bc3d31fb942dd')] bg-fixed bg-cover bg-no-repeat  py-32">
        <CourseLayout
          imgOne={CNC2}
          imgTwo={CNC1}
          Heading="Cloud Native Computing"
          BackIndex="3"
          Para="A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
          GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING."
          ExploreButtonID="CNC"
        />
      </div>
      <div className="bg-[url('https://img.freepik.com/free-vector/green-yellow-abstract-background_53876-99558.jpg?w=740&t=st=1679517181~exp=1679517781~hmac=d072843285ec572d15db8517fcf38d87879c65bb5de5a1b19d21ee74ba3a7d97')] bg-fixed bg-cover bg-no-repeat  py-32">
        <CourseLayout
          imgOne={IOT2}
          imgTwo={IOT1}
          Heading="Internet Of things"
          BackIndex="4"
          Para="A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI"
          ExploreButtonID="IOT"
        />
      </div>
      <div className="bg-[url('https://img.freepik.com/free-photo/cement-wall-floor-copy-space_53876-30237.jpg?w=740&t=st=1679517544~exp=1679518144~hmac=e90426e4425a170e6d1e5538895e843f3d00dac1d38134ee6762b7be7bf74b9c')] bg-fixed bg-cover bg-no-repeat  py-32">
        <CourseLayout
          imgOne={WMD2}
          imgTwo={WMD}
          Heading="Web 3 Metaverse"
          BackIndex="5"
          Para="It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects."
          ExploreButtonID="WMD"
        />
      </div>
    </>
  );
}
