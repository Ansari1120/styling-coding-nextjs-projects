import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Home from "@/components/Home";
import CoursesCards from "@/components/CoursesCards";
import CommonCoursesCards from "@/components/CommonCoursesCards";
import CommonCards from "@/components/CommonCards";
import { RevealWrapper } from "next-reveal";

export default function index() {
  const spacializedtracks = [
    {
      title: "I. Web 3.0 (Blockchain) and Metaverse Specialization",
      text: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
      link: "/Webthree/q4",
      id: "Quarter IV",
      description:
        "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    },
    {
      id: "Quarter V",
      description:
        "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
      link: "/Webthree/q5",
    },
    {
      title:
        "II. Artificial Intelligence (AI) and Deep Learning Specialization",
      text: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models",
      link: "/AI/q4",
      id: "Quarter IV",
      description:
        "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    },
    {
      id: "Quarter V",
      description: "AI-361: Deep Learning and MLOps",
      link: "/AI/q5",
    },
    {
      title: "III. Cloud-Native Computing Specialization",
      text: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      link: "/Cnc/q4",
      id: "Quarter IV",
      description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
    },
    {
      id: "Quarter V",
      description:
        "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
      link: "/Cnc/q5",
    },
    {
      title: "IV. Ambient Computing and IoT Specialization",
      text: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices,Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices",
      link: "/AmbientComputing/q4",
      id: "Quarter IV",
      description:
        "AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices",
    },
    {
      id: "Quarter V",
      description: "AC-361: Embedded Programming using C and Rust",
      link: "/AmbientComputing/q5",
    },
    {
      title: "V. Genomics and Bioinformatics Specialization",
      text: "Genomics is the study of the total genetic makeup of individual organisms, and how this information is structured, functions, and has evolved; bioinformatics encompasses adiverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
      link: "/Genomics/q4",
      id: "Quarter IV",
      description: "Bio-351: Python for Biologists",
    },
    {
      id: "Quarter V",
      description: "Bio-361: Bioinformatics with Python",
      link: "/Genomics/q5",
    },
    {
      title: "VI. Network Programmability and Automation Specialization",
      text: "More than ever, network engineers are finding it challenging to complete their dutiesentirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      link: "/NetworkProgrammability/q4",
      id: "Quarter IV",
      description: "NPA-351: CCNA 200-301 Certification",
    },
    {
      id: "Quarter V",
      description: "NPA-361: Network Programmability and Automation",
      link: "/NetworkProgrammability/q5",
    },
  ];
  return (
    <>
      <Box>
        <Home
          title="Courses Detail"
          src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?w=740&t=st=1676621406~exp=1676622006~hmac=fe9e41ea8ccb5a8210ce3e2e6d64b2f9fb935daa82ed404cdfdf5fa554a74e22"
        />
      </Box>
      <Container maxW={1400}>
        <Box textAlign={"center"} py="30px" mx={{ lg: "200px", base: "30px" }}>
          <RevealWrapper
            origin="left"
            delay={100}
            duration={1000}
            distance="60px"
            reset={true}
            desktop={true}
            mobile={true}
          >
            <Heading
              fontSize={{ lg: "4xl", base: "xl" }}
              pb="20px"
              color="#11AD8E"
            >
              Course Curriculum
            </Heading>
          </RevealWrapper>
          <RevealWrapper
            origin="right"
            delay={100}
            duration={1000}
            distance="50px"
            reset={true}
            desktop={true}
            mobile={true}
          >
            <Text color="WhiteAlpha.700" fontWeight={"semibold"}>
              The first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each
            </Text>
          </RevealWrapper>
        </Box>
        <RevealWrapper
          origin="right"
          delay={50}
          duration={1000}
          distance="50px"
          reset={true}
          desktop={true}
          mobile={true}
        >
          <CommonCoursesCards
            title="Core Courses (Common in All Specializations):"
            text="Every participant of the program will start by completing the following three core courses"
          />
        </RevealWrapper>
        <Flex
          alignItems={"center"}
          justifyContent="center"
          direction={{ base: "column", lg: "row" }}
        >
          <Box flexBasis={"50%"}>
            <RevealWrapper
              origin="top"
              delay={50}
              duration={1000}
              distance="150px0px"
              reset={true}
              desktop={true}
              mobile={true}
            >
              <CommonCards
                id="Quarter I"
                description="CS-101: Object-Oriented Programming using TypeScript and Typescript for React"
                link="/q1"
              />
            </RevealWrapper>
          </Box>
          <Box flexBasis={"40%"}>
            <RevealWrapper
              origin="top"
              delay={50}
              duration={1000}
              distance="50px"
              reset={true}
              desktop={true}
              mobile={true}
            >
              <CommonCards
                id="Quarter II"
                description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                link="/q2"
              />
            </RevealWrapper>
          </Box>
          <Box flexBasis={"50%"}>
            <RevealWrapper
              origin="top"
              delay={50}
              duration={1000}
              distance="50px"
              reset={true}
              desktop={true}
              mobile={true}
            >
              <CommonCards
                id="Quarter III"
                description="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
                link="/q3"
              />
            </RevealWrapper>
          </Box>
        </Flex>
        <RevealWrapper
          origin="left"
          delay={50}
          duration={1000}
          distance="50px"
          reset={true}
          desktop={true}
          mobile={true}
        >
          <CommonCoursesCards
            title="Specialized Tracks"
            text="After completing the first three quarters the participants will select one or more specializations
        consisting of two courses each:"
          />
        </RevealWrapper>
        <CoursesCards data={spacializedtracks} />
      </Container>
    </>
  );
}
