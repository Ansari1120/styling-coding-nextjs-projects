import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Location from "./icons/Location";
import Image from "next/image";
import Favi from "../public/favi.png";
import Copyright from "../public/AiFillCopyrightCircle.png";
import Line from "../public/Line.png";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
export default function Footer() {
  return (
    <Box bg="#0c0c0c" fontFamily="sans-serif">
      <Container maxWidth={"-moz-fit-content"}>
        <SimpleGrid
          spacing={"10px"}
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          paddingY="60px"
        >
          <Box>
            <Heading pb="14px" color="white">
              About Us
            </Heading>
            <Image src={Favi} alt={"panaverse Logo"}></Image>
            <Text pt="14px" color="gray" pr={"50px"}>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technologies
              globally.It is Community of Web 3 and metaverse
              developers.designers , trainers , startup founders and service
              providers.
            </Text>
          </Box>
          <Box>
            <Heading pb={{ base: "30px", lg: "100px" }} color="white">
              Usefull Links
            </Heading>
            <Grid color="gray">
              <Link as={NextLink} href="/">
                Home
              </Link>
              <Link as={NextLink} href="/courses">
                Courses
              </Link>
              <Link as={NextLink} href="/about">
                About
              </Link>
              <Link as={NextLink} href="/contact">
                Contact
              </Link>
            </Grid>
          </Box>
          <Box>
            <Heading pb={{ base: "30px", lg: "100px" }} color="white">
              Follow Us
            </Heading>
            <Grid color="gray">
              <Link href="https://www.facebook.com/groups/panaverse/">
                Facbook
              </Link>
              <Link href="https://www.linkedin.com/school/piaic-pk/">
                LinkedIn
              </Link>
              <Link href="https://www.youtube.com/@panaverse">Youtube</Link>
              <Link href="https://github.com/panaverse">Github</Link>
              <Link href="https://twitter.com/Panaverse_edu">Twitter</Link>
            </Grid>
          </Box>

          <Box>
            <Heading pb={{ base: "30px", lg: "100px" }} color="white">
              Contact Us
            </Heading>
            <Grid color="gray">
              <Link as={NextLink} href="https://wa.me/+921234567890/">
                <PhoneIcon /> +92 123 4567890
              </Link>
              <Link as={NextLink} href="mailto:panaverse@gmail.com">
                <EmailIcon /> panaverse@gmail.com
              </Link>
              <Link as={NextLink} href="/">
                <Location />
                Pakistan
              </Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
      <Box pb="50px" px={"-200px"}>
        <Image src={Line} alt="Line" />
      </Box>
      <Flex
        alignItems="center"
        gap="4px"
        paddingLeft={{ base: "4px", lg: "26px" }}
        paddingBottom="40px"
        justifyContent={"center"}
      >
        <Box>
          <Image src={Copyright} alt="copyright" />
        </Box>
        <Box>
          <Text color="white">Made by Ahmed Ali Ansari PIAIC171908</Text>
        </Box>
      </Flex>
    </Box>
  );
}
