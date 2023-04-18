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
      link: "/syllabus/CNC/quartersOne",

      description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
    },
    {
      id: "Quarter V",
      link: "/syllabus/CNC/quartersTwo",

      description:
        "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
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
          TrackName="III. Cloud-Native Computing Specialization"
          Description="The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes."
        />
        <QuarterLayout data={spacializedtracks} />
      </>
    </>
  );
}
