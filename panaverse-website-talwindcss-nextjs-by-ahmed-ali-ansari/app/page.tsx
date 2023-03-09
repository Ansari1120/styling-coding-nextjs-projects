import Image from "next/image";
import Logo from "../public/Logo.png";
import Saylani from "../public/partners/saylanilogo.png";
import Panacloud from "../public/partners/panacloudlogo.png";
import CourseLayout from "./components/CourseLayout";

export default function Home() {
  return (
    <>
      <div className="rounded-b-[30%] text-center bg-[url('https://images6.alphacoders.com/456/456498.jpg')] bg-fixed bg-cover bg-no-repeat  md:px-40  px-15 py-40  ">
        <h1 className="text-white font-bold md:text-6xl text-4xl ">
          Presidential Initiative
        </h1>
        <label className="font-extrabold md:text-2xl text-xl   mt-1 text-white  md:border-b-8  border-spacing-y-5 md:p-2  border-dashed">
          for Artificial Intelligence & Computing (PIAIC)
        </label>
        <p className="md:rounded-b-[30%] rounded-b-[15%] md:text-lg text-base mt-8 font-semibold  md:mx-20 mx-10 text-black  bg-teal-100  opacity-60  p-4">
          The mission of PIAIC is to reshape Pakistan by revolutionizing
          education, research, and business by adopting latest, cutting-edge
          technologies. Experts are calling this the 4th industrial revolution.
          We want Pakistan to become a global hub for AI, data science, cloud
          native computing, edge computing, blockchain, augmented reality, and
          internet of things.
        </p>
        <button className="ease-in duration-300 bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold mt-3 hover:bg-blue-300 ">
          Learn More
        </button>
      </div>
      <div className="md:flex grid shadow-2xl w-[60%] align-middle justify-items-center justify-around py-[60px] m-auto -mt-[80px] bg-white md:rounded-full  rounded-3xl">
        <Image src={Logo} alt="Logo" width={120} height={120} />
        <Image src={Saylani} alt="Saylani" width={160} height={160} />
        <Image src={Panacloud} alt="Panacloud" width={90} height={90} />
      </div>
      <div>
        <h1 className="text-2xl text-center mt-14 font-bold">Our Programs</h1>
        <CourseLayout
          imgOne=""
          imgTwo=""
          Heading=""
          BackIndex=""
          Para=""
          ExploreButton=" "
        />
      </div>
    </>
  );
}
