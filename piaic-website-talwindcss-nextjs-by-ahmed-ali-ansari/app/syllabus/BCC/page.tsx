import PageHead from "@/app/components/PageHead";
import QuarterLayout from "@/app/components/QuarterLayout";
import TrackIntroLayout from "@/app/components/TrackIntroLayout";
import React from "react";
import Banner from "../Banner";

export default function page() {
  const commontracks = [
    {
      id: "Quarter I",
      description:
        "CS-101: Object-Oriented Programming using TypeScript and Typescript for React",
      link: "/syllabus/commons",
    },
    {
      id: "Quarter II",
      description:
        "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      link: "/syllabus/commons/Ctwo",
    },
    {
      id: "Quarter III",
      description:
        "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      link: "/syllabus/commons/Cthree",
    },
  ];
  const spacializedtracks = [
    {
      id: "Quarter IV",
      link: "/syllabus/BCC/quartersOne",

      description:
        "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    },
    {
      id: "Quarter V",
      link: "/syllabus/BCC/quartersTwo",

      description:
        "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
    },
  ];
  return (
    <>
      <>
        <Banner />
        <PageHead
          Heading="Core Courses"
          tracks="(Common in All Spacializations)"
          Para=" Every participant of the program will start by completing the following three core courses"
        />
        <QuarterLayout data={commontracks} />
        <PageHead
          Heading="Field Courses "
          tracks="(Specialized Tracks)"
          Para=" After completing the first three quarters the participants will select one or more specializations
        consisting of two courses each:"
        />
        <TrackIntroLayout
          TrackName="I. Web 3.0 (Blockchain) and Metaverse Specialization"
          Description="This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences"
        />
        <QuarterLayout data={spacializedtracks} />
      </>
    </>
  );
}
