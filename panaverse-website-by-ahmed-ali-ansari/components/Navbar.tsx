import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import { BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      color={colorMode === "light" ? "gray.900" : "gray.200"}
      boxShadow="lg"
      bg={
        "linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4)"
      }
    >
      <Container maxW="1400">
        {/*we have 3 divs each into one row */}
        <SimpleGrid
          templateColumns={"repeat(6,1fr)"}
          placeItems={"center"}
          height={"97px"}
        >
          <Box>
            <Link href={"/"}>
              <Image src={logo} alt="panaverse logo"></Image>
            </Link>
          </Box>

          <Flex
            marginLeft={"140"}
            fontSize="18"
            fontWeight={"semi-bold"}
            fontFamily="sans-serif"
            gap={{ base: "5", md: "5", lg: "10" }}
          >
            <Link href={""}>Home</Link>
            <Link href={""}>Syllabus</Link>
            <Link href={""}>Courses</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>About</Link>
          </Flex>
          <Box>
            <Button left="59" float="right">
              <Icon as={BellIcon} size={"50"}></Icon>
            </Button>
          </Box>
          <Box>
            <Button float="right" right="30" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>

          <Box>
            <Button size="lg" bg="#11AD8E" left="30" float="right">
              Apply
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Navbar;
