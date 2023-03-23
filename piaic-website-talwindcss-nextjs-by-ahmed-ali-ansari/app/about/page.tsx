export default function page() {
  return (
    <>
      <div className="rounded-b-[30%] text-center bg-[url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=740&t=st=1679533278~exp=1679533878~hmac=2e328000e05e86faf65b46296f15a7950363919e1ca9612ae3997a2282231bed')] bg-fixed bg-cover bg-no-repeat  md:px-40  px-15 py-40  ">
        <h1 className="text-6xl text-white font-bold italic  float-left">
          About
        </h1>
      </div>
      <div className="md:flex grid mt-9  mb-11">
        <div className="md:w-[1250px] w-[300px] bg-slate-50   rounded-md  my-[54px]  md:ml-11 ml-3   pb-16 pt-8 md:px-16 px-2 md:-mr-11  mr-11 ">
          <h1 className="text-black text-5xl font-bold border-l-[6px] border-l-blue-700 pl-3  mt-16">
            Dr. Arif Alvi
          </h1>
          <p className="text-md mt-4 text-black">
            Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic
            of Pakistan on 9th September 2018.
            <br /> Dr. Arif Alvi was born in 1949 and completed his early
            education in Karachi. He did his Bachelor of Dental Surgery (BDS)
            from De’ Montmorency College of Dentistry, Lahore where he was
            declared the “Best Graduate”. He completed his Masters of Science in
            the field of Prosthodontics from University of Michigan (1975) and
            in Orthodontics from University of Pacific, San Francisco (1982).{" "}
            <br /> President Dr. Arif Alvi has been a renowned professional and
            has held many important positions in the field of Dentistry. He
            remained Dean of Orthodontics, College of Physicians and Surgeons of
            Pakistan, President, Pakistan Dental Association (1997-2001).
            Pakistan Association of Orthodontists (2005), Asia Pacific Dental
            Federation (2006-07) and Councilor of the World Dental Federation
            (2007-2013).
          </p>
        </div>
        <div className=" rounded-md bg-[url('https://tailwind-by-ahmed.vercel.app/_next/image?url=%2Farifalvi.jpg&w=640&q=75')] bg-cover bg-center md:w-[60%] w-[80%]  h-[15cm] md:mr-10 ml-5 "></div>
      </div>
      <div className="md:flex grid mb-[1120px]">
        <div className="rounded-md bg-[url('https://tailwind-by-ahmed.vercel.app/_next/image?url=%2Fziakhan.jpg&w=640&q=75')] bg-cover bg-center md:w-[40%] w-[90%]  h-[14cm] md:ml-10 ml-4 ">
          <div className=" md:mt-0 mt-[560px]  md:w-[800px] w-[275px] bg-slate-50  md:mx-[444px] mx-[4px] rounded-md  my-[54px]   md:mr-11  mr-2  pb-16 pt-8 md:px-16 px-8">
            <h1 className="text-black text-5xl font-bold border-l-[6px] border-l-blue-700 pl-3  mt-16">
              Zia Khan
            </h1>
            <p className="text-md mt-4 text-black">
              CEO of Panacloud, the world’s first Integrated API Ownership
              Economy, Crowdfunding, and Development Platform. Volunteer COO of
              PIAIC, an initiative by the President of Pakistan for AI and
              computing mass education. Mentor and software developer with 20+
              years of expertise in cloud and serverless computing, software
              design, project management, and API and App development. Expert in
              concept, business modeling & strategy development for startups,
              specializing in DeFi and token economics. Mentored and trained
              hundreds of thousands of developers.Triple masters degrees in
              business administration, engineering, and finance from Arizona
              State University.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
//mx
