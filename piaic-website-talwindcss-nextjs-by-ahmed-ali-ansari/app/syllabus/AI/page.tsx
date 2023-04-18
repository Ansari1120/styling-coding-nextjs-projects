import React from "react";
import QuarterLayout from "../../components/QuarterLayout";
import Banner from "../Banner";
import PageHead from "../../components/PageHead";
import TrackIntroLayout from "../../components/TrackIntroLayout";

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
      link: "/syllabus/AI/quartersOne",

      description:
        "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    },
    {
      id: "Quarter V",
      link: "/syllabus/AI/quartersTwo",

      description: "AI-361: Deep Learning and MLOps",
    },
  ];
  return (
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
        TrackName="II. Artificial Intelligence (AI) and Deep Learning Specialization"
        Description="The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models"
      />
      <QuarterLayout data={spacializedtracks} />
    </>
  );
}

// const spacializedtracks = [
//   {
//     id: "Quarter I",
//     description:
//       "CS-101: Object-Oriented Programming using TypeScript and Typescript for React",
//     link: "/q1",
//   },
//   {
//     id: "Quarter II",
//     description:
//       "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
//     link: "/q2",
//   },
//   {
//     id: "Quarter III",
//     description:
//       "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
//     link: "/q3",
//   },
//   {
//     title: "I. Web 3.0 (Blockchain) and Metaverse Specialization",
//     text: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
//     link: "/Webthree/q4",
//     id: "Quarter IV",
//     description:
//       "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
//   },
//   {
//     id: "Quarter V",
//     description:
//       "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
//     link: "/Webthree/q5",
//   },
//   {
//     title:
//       "II. Artificial Intelligence (AI) and Deep Learning Specialization",
//     text: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
//     link: "/AI/q4",
//     id: "Quarter IV",
//     description:
//       "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
//   },
//   {
//     id: "Quarter V",
//     description: "AI-361: Deep Learning and MLOps",
//     link: "/AI/q5",
//   },
//   {
//     title: "III. Cloud-Native Computing Specialization",
//     text: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
//     link: "/Cnc/q4",
//     id: "Quarter IV",
//     description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
//   },
//   {
//     id: "Quarter V",
//     description:
//       "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
//     link: "/Cnc/q5",
//   },
//   {
//     title: "IV. Ambient Computing and IoT Specialization",
//     text: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices,Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices",
//     link: "/AmbientComputing/q4",
//     id: "Quarter IV",
//     description:
//       "AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices",
//   },
//   {
//     id: "Quarter V",
//     description: "AC-361: Embedded Programming using C and Rust",
//     link: "/AmbientComputing/q5",
//   },
//   {
//     title: "V. Genomics and Bioinformatics Specialization",
//     text: "Genomics is the study of the total genetic makeup of individual organisms, and how this information is structured, functions, and has evolved; bioinformatics encompasses adiverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
//     link: "/Genomics/q4",
//     id: "Quarter IV",
//     description: "Bio-351: Python for Biologists",
//   },
//   {
//     id: "Quarter V",
//     description: "Bio-361: Bioinformatics with Python",
//     link: "/Genomics/q5",
//   },
//   {
//     title: "VI. Network Programmability and Automation Specialization",
//     text: "More than ever, network engineers are finding it challenging to complete their dutiesentirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
//     link: "/NetworkProgrammability/q4",
//     id: "Quarter IV",
//     description: "NPA-351: CCNA 200-301 Certification",
//   },
//   {
//     id: "Quarter V",
//     description: "NPA-361: Network Programmability and Automation",
//     link: "/NetworkProgrammability/q5",
//   },
// ];
