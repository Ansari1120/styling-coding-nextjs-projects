import Home from "@/components/Home";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";
import ImageNext from "next/image";
import PresidentPhoto from "../../public/Faculty/President.png";
import Logoone from "../../public/Faculty/logo5.png";
import Sirzia from "../../public/Faculty/Zia.jpg";
import Rectangle from "../../public/Rectangle 6.png";
export default function index() {
  return (
    <>
      <Box>
        <Home
          title="About Panaverse"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </Box>
      <Box
        bgImage={
          "https://cdn.pixabay.com/photo/2017/01/18/18/03/filter-1990470_960_720.jpg"
        }
        bgSize={"cover"}
        opacity={20}
      >
        <Container maxW={1400}>
          <Flex
            padding={{ lg: "100px", base: "40px" }}
            gap="10px"
            direction={{ lg: "initial", base: "column" }}
          >
            <Box flexBasis={"50%"}>
              <ImageNext src={PresidentPhoto} alt="president" />
            </Box>
            <Box flexBasis={"50%"} py="30px">
              <Heading color="black" pb="40px">
                Dr Arif Alvi
              </Heading>
              <Text color="black" fontWeight={"semibold"}>
                Dr. Arif Alvi was sworn in as the 13th President of Islamic
                Republic of Pakistan on 9th September 2018. <br /> <br /> Dr.
                Arif Alvi was born in 1949 and completed his early education in
                Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’. <br /> <br /> President Dr. Arif Alvi has
                been a renowned professional and has held many important
                positions in the field of Dentistry. He remained Dean of
                Orthodontics, College of Physicians and Surgeons of Pakistan,
                President, Pakistan Dental Association (1997-2001), Pakistan
                Association of Orthodontists (2005), Asia Pacific Dental
                Federation (2006-07) and Councilor of the World Dental
                Federation (2007-2013). Through his sheer hard work in the World
                Dental Federation, he was able to get the declaration of 20th
                March as World Oral Health Day. He is also an author of a book,
                theses, and many articles.
              </Text>
            </Box>
          </Flex>

          <Flex
            paddingX={{ lg: "100px", base: "20px" }}
            direction={{ lg: "initial", base: "column" }}
            py="30px"
          >
            <Box paddingRight={"20px"} flexBasis={"50%"}>
              <Heading color="black" pb="40px">
                About Panaverse Dao
              </Heading>
              <Text color="black" pb="40px" fontWeight={"semibold"}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
                Panaverse DAO is struggling to produce professional metaverse
                developers from Pakistan for the upcoming Era of Internet <br />{" "}
                <br /> The internet is without a doubt the most important
                technological development in human history. Web3, 3D Metaverse,
                AI, IoT, Cloud, and Edge technologies expand the internet as we
                know it by introducing novel features and advancements.
                Metaverse will make use of all aspects of modern technology,
                including 3D, VR, AR, AI, blockchain, cloud and edge computing,
                voice computing, ambient computing, and more.
              </Text>
            </Box>

            <Box flexBasis={"50%"}>
              <ImageNext src={Logoone} alt="panaverse" />
            </Box>
          </Flex>
          <Grid>
            <Box px={{ lg: "300px", base: "40px" }}>
              <Heading
                // fontSize={{ lg: "initial", base: "sm" }}
                color="black"
                textAlign={"center"}
                pb="40px"
              >
                Program of Studies
              </Heading>
              <Text
                // fontSize={{ lg: "initial", base: "sm" }}
                fontWeight={"semibold"}
                textAlign={"center"}
                color="black"
              >
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first three
                quarters are shared by all specialties and are dedicated to
                studying Object-Oriented Programming and cutting-edge Full-Stack
                Web 2.0 development. It is going to be a fifteen-month-long
                hybrid program that includes both onsite and online classes and
                is divided into five quarters of 13 weeks each. The emphasis
                will be on hands-on learning by educating students to produce
                projects. To accommodate everyone, courses will be held
                primarily on weekends or after 6:00 p.m. (Pakistan Time) on
                weekdays. It employs a hybrid teaching format, with core onsite
                classes complemented by online Zoom laboratories and recorded
                videos.
              </Text>
            </Box>
            <Box pt="50px">
              <ImageNext src={Rectangle} alt="icon" />
            </Box>
          </Grid>

          <Flex
            padding={{ lg: "100px", base: "20px" }}
            direction={{ lg: "initial", base: "column" }}
            py="30px"
          >
            <Box flexBasis={"50%"} pb="20px">
              <ImageNext src={Sirzia} alt="zia khan" />
            </Box>
            <Box color="black" paddingRight={"20px"} flexBasis={"50%"}>
              <Heading pb="40px">COO PIAIC Zia Khan | Main Instructor</Heading>
              <Text pb="40px" fontWeight={"semibold"} color="black">
                CEO of Panacloud, the world’s first Integrated API Ownership
                Economy, Crowdfunding, and Development Platform. Volunteer COO
                of PIAIC, an initiative by the President of Pakistan for AI and
                computing mass education. Mentor and software developer with 20+
                years of expertise in cloud and serverless computing, software
                design, project management, and API and App development. Expert
                in concept, business modeling & strategy development for
                startups, specializing in DeFi and token economics. Mentored and
                trained hundreds of thousands of developers. Triple masters
                degrees in business administration, engineering, and finance
                from Arizona State University. Master in Economics from KU.
                Certified Public Accountant and Certified Management Accountant
                in USA.
                <br /> <br /> Extensive experience in software architecture,
                design, development, implementation, and integration. Worked as
                a developer in Silicon Valley for 7 years. Hands-on work
                including thousands of hours of development work logged recently
                resulting in multiple successful projects for cutting edge
                startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor,
                Tallyfy, Cloudspot, OnSeen, Unicharts, etc.
              </Text>
            </Box>
          </Flex>
          <Box px={{ lg: "590px", base: "125px" }} pt="100px">
            <Heading color="black">Faculty</Heading>
          </Box>

          <Flex
            justifyContent="center"
            gap="50px"
            direction={{ lg: "initial", base: "column" }}
            paddingTop="40px"
            paddingBottom={"30px"}
          >
            <Box
              flexBasis={"20%"}
              px="20px"
              py={"20px"}
              bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
              boxShadow={
                "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
              }
            >
              <Image
                marginX={{ lg: "63px", base: "113px" }}
                borderRadius="full"
                boxSize="100px"
                src="https://media.licdn.com/dms/image/C4E03AQHtvGSpsfadRg/profile-displayphoto-shrink_800_800/0/1517684731220?e=2147483647&v=beta&t=9VvJMkTuQnBzoqprL-7HQaLgWYBQj_ubr4eL4fpp23w"
                alt="Zeeshan Hanif"
              />
              <Heading textAlign={"center"} color="black" fontSize={"xl"}>
                Sir Zeeshan
              </Heading>
              <Text textAlign={"center"} color="black" fontWeight={"semibold"}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders
              </Text>
            </Box>
            <Box
              flexBasis={"20%"}
              px="20px"
              py={"20px"}
              bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
              boxShadow={
                "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
              }
            >
              <Image
                marginX={{ lg: "63px", base: "113px" }}
                borderRadius="full"
                boxSize="100px"
                src="https://media.licdn.com/dms/image/C4D03AQE1Hzv61ccMVw/profile-displayphoto-shrink_800_800/0/1556048207367?e=2147483647&v=beta&t=KjDz0Y-aELrRyRuqh_mj8oCSwUimyoK66DqheBx8aMk"
                alt="Daniyal Nagori"
              />
              <Heading textAlign={"center"} color="black" fontSize={"xl"}>
                Sir Daniyal
              </Heading>
              <Text textAlign={"center"} color="black" fontWeight={"semibold"}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders
              </Text>
            </Box>
            <Box
              flexBasis={"20%"}
              px="20px"
              py={"20px"}
              bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
              boxShadow={
                "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
              }
            >
              <Image
                marginX={{ lg: "63px", base: "113px" }}
                borderRadius="full"
                boxSize="100px"
                src="https://avatars.githubusercontent.com/u/62209503?v=4"
                alt="Adil Altaf"
              />
              <Heading textAlign={"center"} color="black" fontSize={"xl"}>
                Sir Adil
              </Heading>
              <Text textAlign={"center"} color="black" fontWeight={"semibold"}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders
              </Text>
            </Box>
            <Box
              flexBasis={"20%"}
              px="20px"
              py={"20px"}
              bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
              boxShadow={
                "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
              }
            >
              <Image
                marginX={{ lg: "63px", base: "113px" }}
                borderRadius="full"
                boxSize="100px"
                src="https://panaverse-dao-complete-syllabus.vercel.app/_next/image?url=%2Fassets%2Finstructors%2Fmiss-hira.jpg&w=256&q=75"
                alt="Hira Khan"
              />
              <Heading textAlign={"center"} color="black" fontSize={"xl"}>
                Mam Hira
              </Heading>
              <Text textAlign={"center"} color="black" fontWeight={"semibold"}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
