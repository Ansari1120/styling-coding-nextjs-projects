import { Text, Box, Container, Flex, Heading, Button } from "@chakra-ui/react";
import ImageNext from "next/image";
import Character from "../public/Character.png";
import CharacterTwo from "../public/charactertwo.png";
import Icon from "../public/iconone.png";
import Po from "../public/product owner.png";
import accessglobalmarketbydao from "../public/accessglobalmarketbydao.png";
import BoostEconomy from "../public/BoostEconomy.png";
import freelancer from "../public/freelancer.png";
import Journeyone from "../public/journeyone.png";
import airunilogo from "../public/partners/airunilogo.png";
import bahrialogo from "../public/partners/bahrialogo.png";
import cecosunilogo from "../public/partners/cecosunilogo.png";
import panacloudlogo from "../public/partners/panacloudlogo.png";
import piaiclogo from "../public/partners/piaiclogo.png";
import psxlogo from "../public/partners/psxlogo.png";
import saylanilogo from "../public/partners/saylanilogo.png";
import comingsoon from "../public/cities/comingsoon.png";
import islamabad from "../public/cities/islamabad.png";
import karachi from "../public/cities/karachi.png";
import lahore from "../public/cities/lahore.png";
import peshawar from "../public/cities/peshawar.png";
import Link from "next/link";

export default function Landingpage() {
  return (
    <>
      <Box bgImage="./Landingpage.png">
        {/* {keep all content size (width or height same)} */}
        <Container maxW={1400}>
          {/* {keep all content in column form */}
          <Flex
            pt={"150px"}
            pb={"100px"}
            px={"60px"}
            direction={{ lg: "initial", base: "column" }}
          >
            {/* align you box content */}
            <Box flexBasis={"50%"}>
              <Heading color="white" size="2xl">
                Become
              </Heading>

              <Heading color="#11AD8E" size="2xl">
                Certified Web 3.0 <Heading color={"white"}>and</Heading>
                Metaverse Developer
              </Heading>

              <Text color="white" mt={"20px"}>
                Launch Your Dev Career With Web 3 and Metaverse Getting Ready
                for the Next Generation of the Internet
              </Text>
              <Link href="/about" >
              <Button size={"lg"} colorScheme="teal" mt={"20px"}>
                More Info
              </Button>
              </Link>
            </Box>
            <Box mt={{ lg: "-55px", base: "55px" }} flexBasis="50%">
              <ImageNext src={Character} alt="Character" width={"490"} />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* About Section onwards*/}

      <Box>
        <Container maxW={1400}>
          <Flex
            pt={"150px"}
            pb={"100px"}
            px={{ lg: "60px", base: "-10px" }}
            direction={{ lg: "initial", base: "column" }}
          >
            <Box
              flexBasis="50%"
              marginBottom={"115px"}
              paddingY={"50px"}
              borderRadius={"16px"}
              bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
              boxShadow={
                "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
              }
            >
              <Heading
                position={"relative"}
                marginTop="40px"
                paddingBottom={"20px"}
                fontSize={{ lg: "45px", base: "30px" }}
                fontFamily={"Inter"}
                fontStyle={"nomal"}
                textAlign="center"
                letterSpacing={"1px"}
                color={"#11AD8E"}
              >
                The Program in a Nutshell
              </Heading>
              <Heading
                paddingBottom={"20px"}
                fontSize={{ lg: "32px", base: "18px" }}
                fontFamily={"Inter"}
                fontStyle={"nomal"}
                textAlign="center"
                letterSpacing={"1px"}
                textDecoration="underline"
                color={"#11AD8E"}
              >
                Earn While You Learn
              </Heading>
              <Text
                fontSize={{ base: "17px", lg: "initial" }}
                textAlign={"center"}
                color="white"
                paddingBottom={"20px"}
              >
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program's beginning. It
                resembles a cross between a corporate venture and an educational
                project.
              </Text>
            </Box>
            <Box flexBasis="50%" paddingLeft={"100px"}>
              <ImageNext src={CharacterTwo} alt="Character Two" width={"490"} />
            </Box>
          </Flex>
          <Box>
            <ImageNext src={Icon} alt="iconone" />
          </Box>
          <Box paddingX={{ lg: "350px", base: "30px" }}>
            <Heading textAlign={"center"} color={"#11AD8E"} pb="25px">
              Why to Join
            </Heading>
            <Text fontWeight={"semibold"} textAlign={"center"} pb="40px">
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program's beginning. It resembles a
              cross between a corporate venture and an educational project.
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems="center"
              pb={"100px"}
              pt={"60px"}
              gap="6"
              direction={{ lg: "initial", base: "column" }}
            >
              <Box
                bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
                boxShadow={
                  "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                }
                paddingX={{ lg: "50px", base: "40px" }}
                paddingY="50px"
                border={"2px solid #11AD8E"}
                borderRadius={"16px"}
              >
                <Text fontWeight={"semibold"} textAlign={"center"} py={"46px"}>
                  Product Owner
                </Text>
                <ImageNext src={Po} alt="owner" />
              </Box>
              <Box
                bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
                boxShadow={
                  "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                }
                paddingX={{ lg: "43px", base: "4px" }}
                paddingY={{ lg: "64px", base: "34px" }}
                border={"2px solid #11AD8E"}
                borderRadius={"16px"}
              >
                <Text fontWeight={"semibold"} textAlign={"center"} py={"46px"}>
                  Freelance
                </Text>
                <ImageNext src={freelancer} alt="freelance" width={"200"} />
              </Box>
              <Box
                bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
                boxShadow={
                  "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                }
                paddingX={{ lg: "50px", base: "3px" }}
                paddingY={{ lg: "35px", base: "100px" }}
                border={"2px solid #11AD8E"}
                borderRadius={"16px"}
              >
                <Text
                  fontSize={{ base: "14px", lg: "initial" }}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                  py={"20px"}
                >
                  Access to Global Market by Dao
                </Text>
                <ImageNext src={accessglobalmarketbydao} alt="Dao" />
              </Box>
              <Box
                bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
                boxShadow={
                  "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
                }
                paddingX={{ lg: "44px", base: "11px" }}
                paddingY="43px"
                border={"2px solid #11AD8E"}
                borderRadius={"16px"}
              >
                <Text fontWeight={"semibold"} textAlign={"center"} py={"56px"}>
                  Boost Economy
                </Text>
                <ImageNext src={BoostEconomy} alt="Economy" />
              </Box>
            </Flex>
          </Box>
          <Flex pt={"50px"}>
            <Box>
              <ImageNext src={Journeyone} alt="Journey" />
            </Box>
            <Box paddingLeft={{ lg: "400px", base: "85px" }} paddingTop="84px">
              <Heading color="#11AD8E">Our Partners</Heading>
            </Box>
          </Flex>
          <Flex
            bg="linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #191A1B"
            boxShadow={
              "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)"
            }
            placeItems={"center"}
            justifyContent="center"
            marginX="-20px"
            gap="10px"
            direction={{ lg: "initial", base: "column" }}
            paddingTop="20px"
          >
            <Box>
              <ImageNext src={airunilogo} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={bahrialogo} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={cecosunilogo} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={panacloudlogo} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={piaiclogo} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={psxlogo} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={saylanilogo} alt="Uni logo" />
            </Box>
          </Flex>
          <Flex
            pt={"120px"}
            paddingBottom="50px"
            paddingX="15px"
            direction={{ lg: "initial", base: "column" }}
            alignItems={"center"}
          >
            <Box
              color={"#11AD8E"}
              fontSize={"48px"}
              fontWeight={"700px"}
              fontStyle={"nomal"}
              fontFamily="Inter"
              paddingX={"70px"}
              paddingY="110px"
            >
              <Text textAlign={"center"}>
                Oprational <br /> cities
              </Text>
            </Box>
            <Box>
              {" "}
              <ImageNext src={karachi} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={lahore} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={islamabad} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={peshawar} alt="Uni logo" />
            </Box>
            <Box>
              {" "}
              <ImageNext src={comingsoon} alt="Uni logo" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
